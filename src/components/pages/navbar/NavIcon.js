import React from 'react'
import { DesktopContainer, MobileContainer, MyList } from '../../styles/navbar'
import { ListItemButton, ListItemIcon } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Favorite, Person } from '@mui/icons-material';
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
                        color: match ? 'grey' : 'inherit',
                        
                    }}>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{justifyContent:'center'}}>
                    <ListItemIcon sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color: match ? 'grey' : 'inherit',
                    }}>
                    <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{justifyContent:'center'}}>
                    <ListItemIcon sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color: match ? 'grey' : 'inherit',
                    }}>
                    <Person />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            </Component>
        </>
    )
}

export default NavIcon