import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import { PaymentContainer } from '../../styles/shipping'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../../../slices/cartSlice'
import CheckoutSteps from '../../checkoutSteps'
const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [payment, setPayment] = React.useState('paypal');
const cart = useSelector((state) => state.cart);
const { paymentMethod } = cart;
    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(savePaymentMethod(payment));
        navigate('/placeorder');
        console.log('Payment Method Submitted');
    }
    return (
        <>
         <Box sx={{

display: 'flex',
flexDirection: 'column',
justifyContent: 'center',

}}>
    <CheckoutSteps step1 step2 step3 />
            <Typography variant='h4' mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>Payment Method</Typography>
            <PaymentContainer>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '30px', height: 'auto' }}>
               <FormControl fullWidth component="form" onSubmit={handleSubmit}>
                   
                   <FormLabel component="legend">Select Method</FormLabel>
                   <FormGroup>

                       <FormControlLabel control={<Checkbox defaultChecked />} value={ payment} onChange={(e) => setPayment(e.target.value)} label="PayPal or Credit Card" />
                   </FormGroup>
                   <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginRight: '50px', justifyContent: 'space-between' }}>
                            <Button type="submit"  variant="contained" >
                                Continue</Button>

                           
                        </div>
           </FormControl>
           
               </div>
              
            </PaymentContainer>
            </Box>
        </>
    )
}

export default Payment