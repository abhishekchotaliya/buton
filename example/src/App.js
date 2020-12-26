import React from 'react'

// import { Buton } from 'buton'
import Buton from 'buton'
import 'buton/dist/index.css'

const App = () => {
  return <>
    <Buton
      type="light_ghost"
      size="small"
      textColor="green"
      bgColor="blue"
      fontSize={20}
      zoomEffect={false}
      shadow={true}
      fontFamily="nunito"
      icon={<i class="fab fa-apple" />}
      iconSize={30}
      iconColor="red"

      onClick={() => {alert("!")}}
    />
    
    <h1>Normal</h1>
    <Buton type="light_ghost" />
    <Buton type="dark_ghost" />
    <Buton type="light" />
    <Buton type="dark" />

    <h1>Disabled</h1>
    <Buton type="light_ghost" disabled={true}/>
    <Buton type="dark_ghost" disabled={true}/>
    <Buton type="light" disabled={true}/>
    <Buton type="dark" disabled={true}/>
    <Buton size="large" icon={<i class="fab fa-apple" />} />
    {/* <Buton type="dark" />
    <Buton type="light_ghost" />
    <Buton type="dark_ghost" /> */}
  </>
}

export default App
