import React from 'react';
import classes from './Header.module.css';
import Amazon from '../../../src/assets/images/amazon.png';
import flag from '../../../src/assets/images/flag.svg.png';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <> 
    <section className={classes.header_container}>
      <div className={classes.logo_container}>
        <a href="#">
          <img src={Amazon} alt="Amazon Logo" className={classes.logo} />
        </a>
        <div className={classes.delivery}>
          <span><SlLocationPin /></span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      <div className={classes.search}>
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" placeholder="Search" />
        <button>
          <BsSearch size={25} />
        </button>
      </div>

      <div className={classes.order_container}>
        <div className={classes.language}>
          <img src={flag} alt="Flag" />
          <select>
            <option value="EN">EN</option>
          </select>
        </div>

        <a href="#">
          <div>
            <p>Sign in</p>
            <span>Account & Lists</span>
          </div>
        </a>

        <a href="#">
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
        </a>

        <a href="/cart" className={classes.cart}>
          <FaShoppingCart size={35} />
          <span>0</span>
        </a>
      </div>
      
    </section>
    <LowerHeader/>
    </>
  );
};

export default Header;
