import classes from './Results.module.css'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Results = () => {
  const [results, setResults] = useState([])
  const{categoryName} = useParams()
  useEffect(() => {
    
    axios.get(`${productUrl}/products/category/${categoryName}`) 
  .then((res)=>{
    setResults(res.data)

  }).catch((err)=>{
    console.log(err);
    
  })
    
  }, [])
  
  
  
  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}> Results</h1>
        <p style={{padding:"30px"}}>category</p>
        <hr/>
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      </section>
      </Layout>
  )
}

export default Results