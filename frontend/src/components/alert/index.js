import { Alert } from '@mui/material'
import React from 'react'

const AlertInfo = ({children, variant}) => {
  return (
    <>
    <Alert severity={variant}>{children}</Alert>
    </>
  )
}

export default AlertInfo