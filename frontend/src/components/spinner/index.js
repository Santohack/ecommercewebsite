import { CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
  return (
    <><CircularProgress size={100} sx={{justifyContent: 'center', display: 'flex', alignContent: 'center',marginRight: 'auto', marginLeft: 'auto'}} color="success" />
    </>
  )
}

export default Spinner