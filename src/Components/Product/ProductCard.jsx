import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from './CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.productCard_container}>
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <div>
          <h3>{title}</h3>

          <div className={classes.rating}>
            <Rating value={rating?.rate || 0} precision={0.1} readOnly />
            <small>{rating?.count || 0}</small>
          </div>

          <div>
            <CurrencyFormat amount={price} />
          </div>

          <button className={classes.Button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
