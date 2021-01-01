import React from 'react';
import { connect } from 'react-redux';
import EmptyMiniCart from '../headers/EmptyMiniCart';
import CartItemList from './CartItemList';
import OrderDetails from './OrderSummary';

const Cart = ({cartItems}) => {
    const renderCartDetails = () => {
        return (
            <React.Fragment>
                <div className='cartItemList'>
                    <CartItemList />
            </div>
            <div className="order-summary-wrap">
                    <OrderDetails />
            </div>
           </React.Fragment>
        )
    }

    const emptyCart = () => {
        return (
            <div className="emptyCartWrap">
                <EmptyMiniCart />
            </div>
        )
    }
    return (
        <div className='cartPanel containerPadding'>
           {cartItems.length ? renderCartDetails() : emptyCart()} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.selectedProducts
    }
}

export default connect(mapStateToProps, {})(Cart);