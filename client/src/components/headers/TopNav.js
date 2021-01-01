import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import MiniCartPanel from './MiniCartPanel';

const TopNav = ({cartItems}) => {
    const [showMiniCart, setshowMiniCart] = useState(false);
    
    const renderCartItemNumer = () => {
        if(cartItems.length > 0) return <span>({cartItems.length})</span>
    }

    const toggleCart = () => {
        return setshowMiniCart(!showMiniCart)
    }
    
    const hideCart = () => {
        return setshowMiniCart(false)
    }

    return (
        <React.Fragment>
        <ul className="navItems">
            <li><Link to='/' onClick={() => hideCart()}>Home</Link></li>
            <li><Link to='/products' onClick={() => hideCart()}>Products</Link></li>
            <li>
                <button type='button' onClick={() => toggleCart()}>
                    My Cart {renderCartItemNumer()}
                </button>
            </li>
        </ul>
        {showMiniCart ? <MiniCartPanel cartItems={cartItems} /> : null }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        cartItems: state.selectedProducts
    }
}

export default connect(mapStateToProps, { })(TopNav);


