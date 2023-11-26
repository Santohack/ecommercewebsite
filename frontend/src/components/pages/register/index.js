import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { LoginContainer } from '../../styles/login';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRegisterMutation } from '../../../slices/userApiSlice';
import { setCrediential } from '../../../slices/authslice';
import { toast } from 'react-toastify';
const RegsiterScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';
    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        else {
            try {
                const res = register({ email, password, name }).unwrap();
                dispatch(setCrediential({ ...res }));
                navigate(redirect);
                toast.success("Register Successfull");
            } catch (error) {
                toast.error(error?.data?.message || error?.error);
                console.log("error", error);
            }
        }


    }
    return (
        <>
            <Typography variant='h4' mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Register here</Typography>

            <LoginContainer>
                <Box sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
                        <TextField
                            id="email-input"
                            label="Email"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="email-input"
                            label="Name"

                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="password-input"
                            label="Password"
                            type="password"  // Added for password masking
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            id="password-input"
                            label="Confirm Password"
                            type="password"  // Added for password masking
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            variant="outlined"
                        />

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginRight: '50px', justifyContent: 'space-between' }}>
                            <Button type="submit" sx={{ width: '20ch' }} variant="contained">Register</Button>
                            <Typography variant="body1" sx={{ marginLeft: '10px' }}>Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>LogIn</Link></Typography>
                        </div>
                    </FormControl>
                </Box>
            </LoginContainer>
        </>
    )
}

export default RegsiterScreen