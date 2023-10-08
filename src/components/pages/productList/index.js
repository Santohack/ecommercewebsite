import React from 'react'
import { ProductListContainer, ProductListGrid, ProductListGridItem,ProductListImg } from '../../styles/productList'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import products from '../../data/products' 
import ProductRating from '../rating'

import { Link } from 'react-router-dom'
const ProductList = () => {
  return (
    <>
    <Typography variant='h4' mt={4}> Latest Product</Typography>
      <ProductListContainer>
      
        <ProductListGrid container spacing={3}>
        {
          products.map((product,index)=>(
            <ProductListGridItem  key={index} item md={3}>
           
           <Card sx={{ maxWidth: 345 }}>
           <Link to={`product/${product._id}`}>
             <ProductListImg
               component="img"
               alt="green iguana"
               height="140"
               image={product.image}
             />
             </Link>
             <CardContent>
             <Link to={`product/${product._id}`} style={{textDecoration: 'none', color:'#313333'}}>
               <Typography gutterBottom variant="h5" component="div">
                 {product.name}
               </Typography>
               </Link>
               <Typography variant="h4" color="text.secondary" component={"span"}>
                ${product.price}
               </Typography>
             </CardContent>
             <CardActions>
             <ProductRating value={product.rating} text={`${product.numReviews} Reviews` } />
               <Button size="small"  variant='contained'>Add to cart</Button>
             </CardActions>
           </Card>
        
       </ProductListGridItem>
          ))
        }
          
          

        </ProductListGrid>
      </ProductListContainer>

    </>
  )
}

export default ProductList