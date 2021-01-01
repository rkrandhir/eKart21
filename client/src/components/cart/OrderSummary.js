import React from 'react';
import { connect } from 'react-redux';

const OrderSummary = ({ cartPrice }) => {
    return (
        <div className="order-summary">
            <h3 className='order-summary-head'>Order Summary</h3>
            <div className="orderDataRow">
                <div className="orderDataLabel">Retail Price</div>
                <div className="orderDataValue">{cartPrice}</div>
            </div>
            <div className="orderDataRow">
                <div className="orderDataLabel">Delivery Charges</div>
                <div className="orderDataValue">0</div>
            </div>
            <div className="orderDataRow">
                <div className="orderDataLabel">Amount Payable</div>
                <div className="orderDataValue amtPayable">{cartPrice}</div>
            </div>
            <div className='checkoutBtn'>SECURE CHECKOUT</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartPrice: state.cartPrice
    }
}

export default connect(mapStateToProps, {})(OrderSummary);