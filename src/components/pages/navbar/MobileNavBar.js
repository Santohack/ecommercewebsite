import React from 'react'
import { MyList, NavContainer, Search, SearchIconWrapper, StyledInputBase } from '../../styles/navbar'
import { AppBar, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NavIcon from './NavIcon';
const MobileNavBar = ({ match }) => {
  return (
    <NavContainer>
      <AppBar position="static">
        <Toolbar>
          <MyList type="row" sx={{ background: '39404d' }}>

            <Typography variant='h6' sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1, padding: '5px' }}>
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
          </MyList>
        </Toolbar>
      </AppBar>
      <NavIcon match={match} />
    </NavContainer>
  )
}

export default MobileNavBar