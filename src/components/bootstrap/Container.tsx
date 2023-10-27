import React from 'react'
import {ContainerWrappper} from "./ContainerStyle"

const Container = (props:any) => {
  return (
    <ContainerWrappper>

        {props.children}
    </ContainerWrappper>
  )
}

export default Container