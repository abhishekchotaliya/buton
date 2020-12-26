import React from 'react'
import styles from './styles.module.css'
import Radium from 'radium'
import { computeIconProps, computeProps } from "./computeProps"


class Buton extends React.Component {

  render() {
    // props
    let {
      icon,
      className,
      onClick,
      disabled = false,
      text = "My Awesome Button! 🥳"
    } = this.props
    
    // compute the style props
    const computed_style_props = computeProps(this.props)
    // compute icon style props
    const computed_icon_style_props = computeIconProps(this.props)
    
    return <button
      className={className || ""}
      disabled={disabled}
      onClick={onClick}
      style={computed_style_props}
      className={styles.test}
    >
      {/* render icon if present */}
      {
        icon
        ?
        <span
          style={computed_icon_style_props}
        >
          {icon}
        </span>
        :
        <React.Fragment />
      }
      {/* button text */}
      {text}
    </button>
  }

}

export default Radium(Buton)
