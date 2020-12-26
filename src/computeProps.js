// all default props

let default_border_radius = 5

const button_sizes = {
    "small": {
        padding: "5px 10px",
        fontSize: 12,
    },
    "medium": {
        padding: "7px 15px",
        fontSize: 15,
    },
    "large": {
        padding: "13px 20px",
        fontSize: 18,
    }
}

const button_theme = {
    base: {
        light: {
            color: "rgba(0,0,0,1)",
            backgroundColor: "rgba(255,255,255,0.85)",
            border: "none"
        },
        dark: {
            color: "rgba(255,255,255,1)",
            backgroundColor: "rgba(0,0,0,0.85)",
            border: "none"
        },
        light_ghost: {
            color: "#111",
            backgroundColor: "transparent",
            border: "1px solid rgba(0,0,0,0.25)"
        },
        dark_ghost: {
            color: "#fff",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.25)"
        }
    },
    hover: {
        light: {
            color: "rgba(0,0,0,1)",
            backgroundColor: "rgba(255,255,255,1)"
        },
        dark: {
            color: "rgba(255,255,255,1)",
            backgroundColor: "rgba(0,0,0,1)"
        },
        light_ghost: {
            color: "#111",
            border: "1px solid rgba(0,0,0,0.85)"
        },
        dark_ghost: {
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.85)"
        }
    },
    disabled: {
        light: {
            color: "rgba(0,0,0,0.5)",
            backgroundColor: "rgba(255,255,255,0.5)"
        },
        dark: {
            color: "rgba(255,255,255,0.5)",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        light_ghost: {
            color: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(0,0,0,0.25)"
        },
        dark_ghost: {
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.25)"
        }
    }
}


// compute button style
export const computeProps = props => {
    
    // final style object
    const {
        type = "light",
        size = "medium",
        textColor,
        bgColor,
        border_radius,
        fontSize,
        shadow,
        zoomEffect,
        speed,
        fontFamily = "Sans-serif",
    } = props
    
    const final_obj = {
        ...button_theme.base[type],
        ...button_sizes[size],
        fontFamily,
        cursor: "pointer",
        borderRadius: border_radius || default_border_radius,

        // default props
        outline: "none",
        transitionDuration: "250ms",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.25)"
    }

    // consider the transition speed if provided
    if ("speed" in props) {
        final_obj["transitionDuration"] = `${speed}ms`
    }
    // consider the font size if provided
    if (fontSize) {
        final_obj["fontSize"] = fontSize
    }
    // consider the font color if provided
    if (textColor) {
        final_obj["color"] = textColor
    }
    // consider the button background color if provided
    if (bgColor) {
        final_obj["backgroundColor"] = bgColor
    }

    // hover styles
    final_obj[":hover"] = {
        ...button_theme.hover[type],
        transform: "scale(1.05, 1.05)",
        boxShadow: "0px 4px 30px rgba(0,0,0,0.25)"
    }
    
    // disabled style
    final_obj[":disabled"] = {
        cursor: "not-allowed",
        ...button_theme.disabled[type],
        transform: "scale(1.05, 1.05)",
        boxShadow: "0px 4px 30px rgba(0,0,0,0.25)"
    }

    // remove the shadow if the prop is false
    if ("shadow" in props) {
        if (!shadow) {
            delete final_obj["boxShadow"]
            delete final_obj[":hover"]["boxShadow"]
            delete final_obj[":disabled"]["boxShadow"]
        }
    }
    
    // remove the shadow if the prop is false
    if ("zoomEffect" in props) {
        if (!zoomEffect) {
            delete final_obj["transform"]
            delete final_obj[":hover"]["transform"]
            delete final_obj[":disabled"]["transform"]
        }
    }

    // return the final computed radium style
    return final_obj
}

// compute icon style
export const computeIconProps = props => {

    // icon style object
    const final_obj = {
        marginRight: 8
    }
    // add the icon color if provided
    if (props.iconColor) {
        final_obj["color"] = props.iconColor
    }
    // add the icon size if provided
    if (props.iconSize) {
        final_obj["fontSize"] = props.iconSize
    }
    // add the right margin if provided
    if (props.iconSpace) {
        final_obj["marginRight"] = props.iconSpace
    }
    
    // return the final computed radium style
    return final_obj
}
