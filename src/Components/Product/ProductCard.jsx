import React from 'react';
import classes from './Product.module.css';
import CurrencyFormat from './CurrencyFormat';

const brandColors = {
  Samsung: '#007AFF',   // blue
  Xiaomi: '#FF6900',    // orange
  Game: '#4CAF50',      // green
  TV: '#9C27B0',        // purple
  // add more brand-color pairs here as needed
};

const ProductCard = ({ item }) => {
  // get color from brandColors based on brand prop
  const brandColor = brandColors[item.brand] || '#555'; // fallback color

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        {item.discount && (
          <span className={classes.discountRibbon}>
            Discount {item.discount}
          </span>
        )}
        <a href="#">
          <img className={classes.image} src={item.image} alt={item.title} />
        </a>
      </div>

      <div className={classes.content}>
        {item.popular && (
          <span className={classes.popularTag}>🔥 Popular</span>
        )}

        <h3 className={classes.title}>{item.title}</h3>
        <h4 className={classes.model}>{item.model}</h4>

        <h5
          className={classes.brand}
          style={{ color: brandColor }}
        >
          {item.brand}
        </h5>

        <CurrencyFormat amount={item.price} className={classes.price} />

        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
