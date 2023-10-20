import { Divider, FormControl, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, Stack } from '@mui/material';
import { addToCart, deleteItem } from '../../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import AlertInfo from '../../alert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import React from 'react'
import { Typography } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const {cartItem} = useSelector((state)=>state.cart)
  const deleteProduct = (id)=>{
      dispatch(deleteItem(id) )
  }
  const addToCartHandle =  (product,qty)=>{
   dispatch(addToCart({...product,qty}))
    
  }
  return (
    <>
      <Typography variant='h4' mt={3} component={'div'}>Shopping Cart</Typography>
{ cartItem.length === 0 ? (
  <AlertInfo variant={"error"} >{`Cart Is Empty`} <Link to='/'>Go Back TO add Product </Link></AlertInfo>
): (<>  <Grid container spacing={3} mt={2}>
      {
        cartItem.map((item,index)=>(
          <>
          {console.log("item",item)}
          <Grid key={index} item xs={12} sm={6} md={8} >
          <List>
            <ListItem secondaryAction={
              <IconButton onClick={()=>deleteProduct(item._id)}  edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
            >
             
                <img src={item.image} alt=  {item.name}  style={{ borderRadius: '15px', width: '131px',}} />
             
              <ListItemText sx={{marginLeft:'5px'}}>
               <Link to= {`/product/${item._id}`}> {item.name}</Link>
              </ListItemText>
              <ListItemText>
               $ {item.price}
              </ListItemText>
              <ListItemText>
              <FormControl >
        <Select
        sx={{ height:'37px', minWidth: 100,marginLeft:'9px' }}
        defaultValue={30}
          value={item.qty}
          onChange={(e)=>addToCartHandle(item,Number(e.target.value))}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >{ 
          [...Array(item.countInStock).keys()].map((x)=>(
            <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
          ))
        }
                   
         
        </Select>
       
      </FormControl>
              </ListItemText>
            </ListItem>

          </List>
          <Divider />
        </Grid>
          </>
        ))
      }
       

        <Grid item md={3}>
          kkj
        </Grid>


      </Grid> </>)}
     
    </>
  )
}

export default Cart