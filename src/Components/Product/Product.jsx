import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

const Product = () => {
  const [products, setProducts] = useState([]);     // plural for clarity
         // optional: handle errors

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);


  return (
    <section className={classes.product_container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};

export default Product;
