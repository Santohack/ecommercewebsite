import React from 'react'
import { DesktopContainer, MobileContainer, MyList } from '../../styles/navbar'
import { ListItemButton, ListItemIcon } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Favorite, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const NavIcon = ({match}) => {
  const Component = match? MobileContainer: DesktopContainer
    return (
        <>
        <Component>

      
            <MyList type='row'>
          
            <ListItemButton sx={{justifyContent:'center'}}>
                    <ListItemIcon sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color: match ? 'grey' : 'inherit'
                    }}>
                      <Link to="/cart" style={{ color: match ? 'grey' : 'inherit', textDecoration: 'none' }}>
                        <AddShoppingCartIcon   />
                        </Link>
                    </ListItemIcon>
                </ListItemButton>
           
                
                <ListItemButton sx={{justifyContent:'center'}}>
                    <ListItemIcon sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color: match ? 'grey' : 'inherit',
                    }}>
                      <Link to="/whishlist" style={{ color: match ? 'grey' : 'inherit', textDecoration: 'none' }}>
                    <Favorite />
                    </Link>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{justifyContent:'center'}}>
                    <ListItemIcon sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color: match ? 'grey' : 'inherit',
                    }}>
                     <Link to="/user" style={{ color: match ? 'grey' : 'inherit', textDecoration: 'none' }}>
                    <Person />
                    </Link>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            </Component>
        </>
    )
}

export default NavIcon