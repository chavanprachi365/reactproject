import React from 'react'
import {B} from "./B"

export const A = () => {
  return (
   <>
    <div style={{fontsize:"10px",background:"yellow",height:"50px",}}>
        I am <span style={{color:"green",fontsize:"bold"}}>A</span> & my parent is App.js.
        
    </div>
    <B/>
   </>
  )
}
