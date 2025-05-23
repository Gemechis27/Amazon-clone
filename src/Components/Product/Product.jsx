import React from 'react';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import { productItem } from './ProductFile';

const groupByCategory = (items) => {
  return items.reduce((acc, item) => {
    if (item.image) { // Filter out products without images
      (acc[item.category] = acc[item.category] || []).push(item);
    }
    return acc;
  }, {});
};

const Product = () => {
  const categorized = groupByCategory(productItem);

  return (
    <div className={classes.catalog}>
      {Object.entries(categorized).map(([category, products]) => (
        <section key={category}>
          <h2 className={classes.categoryTitle}>{category}</h2>
          <div className={classes.product_container}>
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Product;

