import { Badge, IconButton, ListItemButton, ListItemIcon } from '@mui/material'
import { DesktopContainer, MobileContainer, MyList, StyledBadge } from '../../styles/navbar'
import { Favorite, Person } from '@mui/icons-material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';
import AccountMenu from '../../AccountMenu';

const NavIcon = ({match}) => {
  const Component = match? MobileContainer: DesktopContainer
  const {cartItem} = useSelector((state)=>state.cart)
  const {userInfo} = useSelector((state)=>state.auth)
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
                       
                       
      <Badge badgeContent={cartItem.reduce((acc,i)=> acc + i.qty, 0 )} color="secondary">
      <AddShoppingCartIcon   />
      </Badge>
  
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
                        {userInfo ? (<AccountMenu name={userInfo.name} />):(<> <Link to="/login" style={{ color: match ? 'grey' : 'inherit', textDecoration: 'none' }}>
                    <Person />
                    </Link> </>)}
                    
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            </Component>
        </>
    )
}

export default NavIcon