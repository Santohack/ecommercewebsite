import { Button, Divider, FormControl, Grid, ListItem, ListItemText, MenuItem, Select, Typography } from '@mui/material'
import { ImageContainer, Item, ProductDetailContainer } from '../../styles/productDetails'
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import AlertInfo from '../../alert'
import { MyList } from '../../styles/navbar'
import ProductRating from '../rating'
import Spinner from '../../spinner'
import { addToCart } from '../../../slices/cartSlice'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useGetProductsDetailQuery } from '../../../slices/productApiSlice'

// import products from '../../data/products'


/**
 * Renders the product detail page.
 *
 * @return {JSX.Element} The product detail component.
 */
const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [qty, setQty] = useState('1')
  const { id: productId } = useParams()
  const {data:product, isLoading,error} = useGetProductsDetailQuery(productId)

  const addProductHandler = ()=>{
    dispatch(addToCart({...product,qty}))
    navigate('/cart')
  }
  // useEffect(() => {
  //   const ProductData = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/${productId}`)
  //       setProduct(response.data)
  //     } catch (err) {
  //       console.error(err)
  //     }

  //   }
  //   ProductData()
  // }, [productId])
  // console.log("productID", product);
  return (
    <ProductDetailContainer>

     

  {isLoading? (
    <Spinner />   ): error? ( <AlertInfo variant={"error"} >{error?.data.message || error?.error}</AlertInfo>): (
    <>
    <Link to="/">
        <Button variant='contained'>Go Back</Button>
      </Link>
    <Grid mt={2} container>
        <Grid item md={5}>
          <ImageContainer src={product.image} alt={product.name} />
        </Grid>
        <Grid pl={3} item md={4}>
          <MyList >
            <ListItem>
              <ListItemText>
                <Typography variant='h4'>{product.name}</Typography>
              </ListItemText>
            </ListItem>
            <Divider pl={3} />
            <ListItem>
              <ListItemText>
                <ProductRating value={product.rating} text={`${product.numReviews} Review`} />
              </ListItemText>
            </ListItem>
            <Divider pl={3} />
            <ListItem>
              <ListItemText>
                <Typography variant='h5'>Price: ${product.price}</Typography>
              </ListItemText>
            </ListItem>
            <Divider pl={3} />
            <ListItem>
              <ListItemText>
                <Typography variant='body1'>Description: {product.description}</Typography>
              </ListItemText>
            </ListItem>
          </MyList>
        </Grid>
        <Grid item pl={3} md={3}>
          <MyList>
            <ListItem>
              <Item>
                Price: ${product.price}
              </Item>
            </ListItem>
            <ListItem>
              <Item>
                Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </Item>
            </ListItem>
           {product.countInStock>0 &&( <ListItem>
              <Item>
                Qty: <FormControl >
        <Select
        sx={{ height:'37px', minWidth: 100,marginLeft:'9px' }}
        defaultValue={30}
          value={qty}
          onChange={(e)=>setQty(e.target.value)}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >{ 
          [...Array(product.countInStock).keys()].map((x)=>(
            <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
          ))
        }
                   
         
        </Select>
       
      </FormControl>
              </Item>
            </ListItem>)}
            <ListItem>
              <Item>
                <Button variant='contained' disabled={product.countInStock === 0} onClick={addProductHandler}> Add To Cart</Button>
              </Item>
            </ListItem>
          </MyList>
        </Grid>
      </Grid>
      </>

  )}
      
    </ProductDetailContainer>
  )
}

export default ProductDetail