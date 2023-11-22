import { Button, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, MenuItem, Paper, Select, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, deleteItem } from '../../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import AlertInfo from '../../alert';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { Typography } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cartItem } = useSelector((state) => state.cart)
  const deleteProduct = (id) => {
    dispatch(deleteItem(id))
  }
  const addToCartHandle = (product, qty) => {
    dispatch(addToCart({ ...product, qty }))

  }
  const checkoutProcessHandler = ()=>{
    navigate('/login?redirect=/shipping')
  }
  return (
    <>
    
      <Typography variant='h4' mt={3} component={'div'}>Shopping Cart</Typography>
      {cartItem.length === 0 && (
        <AlertInfo variant={"error"} >{`Cart Is Empty`} <Link to='/'>Go Back TO add Product </Link></AlertInfo>
      )}
       <Grid container spacing={3} mt={2}>
        {
          cartItem.map((item, index) => (
            <>
              {console.log("item", item)}
              <Grid key={index} item xs={12} sm={6} md={8} >
                <List>
                  <ListItem secondaryAction={
                    <IconButton onClick={() => deleteProduct(item._id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >

                    <img src={item.image} alt={item.name} style={{ borderRadius: '15px', width: '131px', }} />

                    <ListItemText sx={{ marginLeft: '5px' }}>
                      <Link to={`/product/${item._id}`}> {item.name}</Link>
                    </ListItemText>
                    <ListItemText>
                      $ {item.price}
                    </ListItemText>
                    <ListItemText>
                      <FormControl >
                        <Select
                          sx={{ height: '37px', minWidth: 100, marginLeft: '9px' }}
                          // defaultValue={30}
                          value={item.qty}
                          onChange={(e) => addToCartHandle(item, Number(e.target.value))}

                          inputProps={{ 'aria-label': 'Without label' }}
                        >{
                            [...Array(item.countInStock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>{x + 1}</MenuItem>
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
        <div style={{  backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', position: 'fixed', right: '200px' }}>

        <Grid item md={3}>

          <List sx={{width:'max-content'}}>
            <ListItem>
              <Typography variant='h5'>
                Subtotal ({cartItem.reduce((acc, item) => acc + item.qty, 0)}) items
              </Typography>


            </ListItem>
            <Divider flexItem orientation='horizontal' />
            <ListItem>
              <Typography variant='body1'>
                Total Price: ${cartItem.reduce((acc, item) => acc + (item.qty + item.price), 0)}
              </Typography>


            </ListItem>
            <Divider />
            <ListItemButton>
              <Button variant='contained' onClick={checkoutProcessHandler} > Proceed to Checkout</Button>
            </ListItemButton>
          </List>


        </Grid>
</div>

      </Grid> 
      

    </>
  )
}

export default Cart