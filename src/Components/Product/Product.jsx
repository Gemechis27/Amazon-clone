import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

import classes from './Product.module.css'

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
         axios.get('https://fakestoreapi.com/products')
        .then (function(item){
            setProduct(item.data)
          
            
        })
        .catch ((error)=>{
            console.log(error, "error");
            
        })
    }, []);

    
       
        
  return (
    <section className={classes.product_container}>
        {product.map((singleProduct)=>{
        return  <ProductCard product={singleProduct}  key={singleProduct.id}  /> 
        })}
        

    </section>
  )
}

export default Product