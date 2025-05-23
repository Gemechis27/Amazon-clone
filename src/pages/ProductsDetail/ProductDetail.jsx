import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import Rating from '@mui/material/Rating';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <Layout>
      <div className={classes.product_detail}>
        <div className={classes.product_wrapper}>
          <div className={classes.product_image}>
            <img src={product.image} alt={product.title} />
          </div>

          <div className={classes.product_info}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <div className={classes.product_price}>${product.price}</div>

            <div className={classes.product_rating}>
              <Rating value={product.rating?.rate || 0} precision={0.1} readOnly />
              <span>({product.rating?.count || 0})</span>
            </div>

            <div className={classes.product_buttons}>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
