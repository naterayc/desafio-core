import React, { Fragment, useState } from 'react';
import logo from '../../statics/logo.png';
import user from '../../statics/account.png';
import cart from '../../statics/shopping-cart.png';
import './header.css';
import Cart from '../cart/cart';

const Header = (props) => {

    const [showCart, setShowCart] = useState(false);

    const playCart = () => {
        if(showCart === false){
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    }

    

    return(
        <Fragment>
        <header>
            <img src={logo} alt="logo"></img>
            <input placeholder="O que esta procurando?"></input>
            <div>
                <img src={user} alt="user"></img>
                <span>Yndira Natera</span>
            </div>
            <div onClick={playCart}>
                <img src={cart} alt="mini-cart"></img>
                <span>{props.cartProduct}</span>
            </div>
        </header>
        {showCart === false ? null : <Cart itemsInBill={props.itemsInBill} />}
        </Fragment>
    );
}

export default Header;