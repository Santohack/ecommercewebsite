import React from 'react'
import products from '../../data/products'
import { Link, useParams } from 'react-router-dom'
import { ImageContainer, Item, ProductDetailContainer } from '../../styles/productDetails'
import { Button, Divider, Grid, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import { MyList } from '../../styles/navbar'
import ProductRating from '../rating'
import {Description} from '@mui/icons-material'

const ProductDetail = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
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
                Status: {product.countInStock >0? 'In Stock': 'Out of Stock'}
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