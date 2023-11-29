import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCreateOrderMutation } from '../../../slices/ordersApiSlice'
import { cleanCart } from '../../../slices/cartSlice'
import { Box, Grid } from '@mui/material'
import CheckoutSteps from '../../checkoutSteps'
const PlaceOrder = () => {
  const navigate = useNavigate();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart);
  
  return (
    <>
    <Box>
    <CheckoutSteps step1 step2 step3 step4 />
   
    <Grid mt={4} container>

      <Grid item xs={12} sm={6} md={8}>
        hello

      </Grid>

      <Grid item xs={12} sm={6} md={4}>

h1         </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default PlaceOrder