import { Box, Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { ShippingContainer } from '../../styles/shipping'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../../slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../../checkoutSteps'

const ShippingAddress = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const [address, setAddress] = React.useState(shippingAddress?.address || '');
    const [city, setCity] = React.useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode] = React.useState(shippingAddress?.postalCode || '');
    const [country, setCountry] = React.useState(shippingAddress?.country || '');
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate('/payment');
    }

  return (
    <>
    <CheckoutSteps step1 step2    />
    <Typography variant='h4' mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} component={'div'}> Shipping Address</Typography>
    <ShippingContainer>
                <Box sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
                        <TextField
                            id="email-input"
                            label="Adreess"
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="email-input"
                            label="City"
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="email-input"
                            label="Postal Code"
                            type='text'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="email-input"
                            label="Country"
                            type='text'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            variant="outlined"
                        />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginRight: '50px', justifyContent: 'space-between' }}>
                            <Button type="submit" sx={{ width: '20ch' }} variant="contained" >
                                Submit</Button>

                           
                        </div>
                    </FormControl>
                </Box>
            </ShippingContainer>
    
    </>
  )
}

export default ShippingAddress