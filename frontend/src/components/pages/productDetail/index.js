import React, { useEffect, useState } from 'react'
// import products from '../../data/products'
import { Link, useParams } from 'react-router-dom'
import { ImageContainer, Item, ProductDetailContainer } from '../../styles/productDetails'
import { Button, Divider, Grid, ListItem, ListItemText, Typography } from '@mui/material'
import { MyList } from '../../styles/navbar'
import ProductRating from '../rating'
import axios from 'axios'

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const { id: productId } = useParams()
  useEffect(() => {
    const ProductData = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`)
        setProduct(response.data)
      } catch (err) {
        console.error(err)
      }

    }
    ProductData()
  }, [productId])
  console.log("productID", product);
  return (
    <ProductDetailContainer>

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
            <ListItem>
              <Item>
                <Button variant='contained' disabled={product.countInStock === 0}> Add To Cart</Button>
              </Item>
            </ListItem>
          </MyList>
        </Grid>
      </Grid>
    </ProductDetailContainer>
  )
}

export default ProductDetail