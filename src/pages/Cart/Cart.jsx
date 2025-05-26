import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/Product/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'

const Cart = () => {
  const[{basket,user}, dispatch]=useContext(DataContext);
  const total=basket.reduce((amount,item)=>{
        return item.price + amount
  },0)

  return (

    <Layout>
        
          <section className={classes.container}>
            <div className={classes.cart_container}>
              <h3>Your shopping Basket</h3>
              <hr />
              {
                basket?.length==0?(
                <p>Opps ! no Item in your cart</p>
                   ): (
                 basket?.map((item,i)=>{
                  return <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                 }
                ))
              }
            </div>
             { basket?.length !==0&&(
                   <div className={classes.subtotal}>
                    <div>
              <p>Subtotal ({basket?.length}items) </p>
            <CurrencyFormat amount={total}/>

            </div>
            <span>
              <input type='checkbox'/>
              <small>This order contains a gift</small>
            </span>
            <Link to='/payments'>continue to checkout</Link>
            </div>
              )}
          
          </section>
          
    </Layout>
    
  )
}

export default Cart