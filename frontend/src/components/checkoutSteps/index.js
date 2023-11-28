import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { Link } from 'react-router-dom';





const ColorlibStepIconRoot = styled('span')(({  ownerState }) => ({
    backgroundColor: ownerState.backgroundColor || '#ccc' , // Default to black if no backgroundColor is provided
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, backgroundColor, className } = props;

    const icons = {
        1: <LoginOutlinedIcon />,
        2: <LocalShippingOutlinedIcon />,
        3: <PaymentOutlinedIcon />,
        4: <BikeScooterOutlinedIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ backgroundColor, completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}




// ... (imports and styled components)

export default function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Stack sx={{ width: '100%',justifyContent: 'center', alignItems: 'center' }}  mt={3} direction="row" spacing={10}>
            {step1 ? (
                <Link to='/login' style={{ textDecoration: 'none' }} >
                   
                    <ColorlibStepIcon  backgroundColor="#f0c14b" icon={1} /> Login
                </Link>

            ) : (
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <ColorlibStepIcon icon={1} />
                    Login
                </Link>
            )
            }
            {
                step2 ? (
                    <Link to='/shipping' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon backgroundColor="#f0c14b" icon={2} />
                        Shipping
                    </Link>

                ) : (
                    <Link to='/shipping' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon icon={2} />
                        Shipping
                    </Link>
                )
            }
            {
                step3 ? (
                    <Link to='/payment' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon backgroundColor="#f0c14b" icon={3} />
                        Payment
                    </Link>

                ) : (
                    <Link to='/payment' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon icon={3} />
                        Payment
                    </Link>
                )
            }
            {
                step4 ? (
                    <Link to='/placeorder' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon backgroundColor="#f0c14b" icon={4} />
                        Place Order
                    </Link>

                ) : (
                    <Link to='/placeorder' style={{ textDecoration: 'none' }}>
                        <ColorlibStepIcon icon={4} />
                        Place Order
                    </Link>
                )
            }
        </Stack >
    );
}
