import React from 'react'
import { NavContainer, Search, SearchIconWrapper, StyledInputBase } from '../../styles/navbar'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NavIcon from './NavIcon';
const DesktopNavBar = ({match}) => {
  return (
    <>
      <NavContainer>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ShopCart
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <NavIcon match={match} />

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </NavContainer>

    </>
  )
}

export default DesktopNavBar