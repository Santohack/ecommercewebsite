import React, { useState } from 'react';
import { LoginContainer } from '../../styles/login';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted", { email, password });
    };

    return (
        <>
            <Typography variant='h4' mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login</Typography>

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
                            id="password-input"
                            label="Password"
                            type="password"  // Added for password masking
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                        />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginRight: '50px', justifyContent: 'space-between' }}>
                            <Button type="submit" sx={{ width: '20ch' }} variant="contained">Login</Button>
                            <Typography variant="body1" sx={{ marginLeft: '10px' }}>New Here? <Link to='/register'>Register</Link></Typography>
                        </div>
                    </FormControl>
                </Box>
            </LoginContainer>
        </>
    );
};

export default LoginScreen;
