import { AppBar, Toolbar, Typography } from '@mui/material'
import { NavContainer, Search, SearchIconWrapper, StyledInputBase } from '../../styles/navbar'

import NavIcon from './NavIcon';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

/**
 * Renders the desktop navigation bar component.
 *
 * @param {object} match - The match object containing the URL parameters.
 * @returns {ReactNode} The rendered navigation bar component.
 */
const DesktopNavBar = ({ match }) => {
 

  return (
    <>
      {/* Container for the navigation bar */}
      <NavContainer>
        {/* App bar component */}
        <AppBar position="static">
          {/* Toolbar component */}
          <Toolbar>
            {/* Typography component for the logo */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ShopCart
            </Typography>
            {/* Search component */}
            <Search>
              {/* Wrapper for the search icon */}
              <SearchIconWrapper>
                {/* Search icon */}
                <SearchIcon />
              </SearchIconWrapper>
              {/* Input base component for search input */}
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            {/* Navigation icon component */}
            <NavIcon match={match} />
          </Toolbar>
        </AppBar>
      </NavContainer>
    </>
  );
};

export default DesktopNavBar