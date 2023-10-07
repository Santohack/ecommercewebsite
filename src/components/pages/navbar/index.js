import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

const NavBar = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
    {match? <MobileNavBar match={match} /> :<DesktopNavBar  match={match}/>}
    </div>
  )
}

export default NavBar