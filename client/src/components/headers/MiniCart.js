import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, removePriceToCart } from './../../actions';

const MiniCart = ({ cartItems, cartPrice, removeFromCart, removePriceToCart }) => {
    const removeCartItem = item => {
        removePriceToCart(item.price);
        return removeFromCart(item);
    }

    const renderList = () => {
        return cartItems.map(item => {
            return (
                <div key={item.id} className="miniCartItem">
                    <div className="miniCartImgWrap">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="miniCartItemDetails">
                        <div className="miniCartTitleCont">
                            <span className="miniCartTitle">{item.name}</span>
                            <span className='iconDelete' onClick={() => removeCartItem(item)}>Delete</span>
                        </div>
                        <p>INR {item.price}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='miniCart'>
            <div className='miniCartItemWrap'>
                {renderList()}
            </div>
            <div className="miniCartTotalWrap">
                <div className="totalPrice">Total: <span><span className="inr">INR</span> {cartPrice}</span></div>
                <Link className="btnViewCart" to='/cart'>VIEW BAG</Link>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cartItems: state.selectedProducts,
        cartPrice: state.cartPrice
    }
}

export default connect(mapStateToProps, { removeFromCart, removePriceToCart })(MiniCart);