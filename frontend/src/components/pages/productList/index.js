import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { ProductListContainer, ProductListGrid, ProductListGridItem, ProductListImg } from '../../styles/productList'
import React,{useEffect, useState} from 'react'

import { Link } from 'react-router-dom'
import ProductRating from '../rating'
import axios from 'axios'
import { useGetProductsQuery } from '../../../slices/productApiSlice'

const ProductList = () => {
  
  const { data:products,isLoading,error} =useGetProductsQuery()
  // const [products, setProducts] = useState([])
  // useEffect(()=>{ 
  //   const allProducts =  async ()=>{
  //     try {
  //         const {data} = await axios.get(`api/products`)
         
  //         setProducts(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
    
  //   }
  // allProducts();
  // },[])

  // console.log("products", products);
  return (
    <>
    {isLoading? (<h2>Loading....</h2>): error? (<div>{error?.data.message || error?.error} </div>): (<> <Typography variant='h4' mt={4}> Latest Product</Typography>
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
      </ProductListContainer></>)}
   

    </>
  )
}

export default ProductList