import React from 'react'
import {FormGroupWrappper }from './FormGroupStyle'
import Input from "@mui/material/Input/Input"
import Label from '@mui/material/FormLabel/FormLabel'

const FormGroup = () => {
  return (
    <div>
      
      <FormGroupWrappper>
      <Label >Hello</Label >
      <Input />
      </FormGroupWrappper>
      </div>
  )
}

export default FormGroup