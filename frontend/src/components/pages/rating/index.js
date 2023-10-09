import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductRating = ({text,value}) => {
  return (
    <>
    <Stack direction='row' m={1} >
    <Rating value={value}  precision={0.5}  readOnly />
<Typography variant='subtitle2'>
    {text && text}
</Typography>
    </Stack>

    </>
  )
}

export default ProductRating