import React from 'react'
import products from '../../data/products'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const {id:productId} = useParams()
    const product = products.find((p)=>p._id === productId)
  return (
    <div>{console.log(product)}</div>
  )
}

export default ProductDetail