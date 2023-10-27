import React from 'react'
import {BoxWrappper} from "./BoxStyle";
const Box = (props:any) => {
  return (
    <BoxWrappper>

     <div className='insideBox'>
      {props.children}
      </div> 
    </BoxWrappper>
  )
}

export default Box