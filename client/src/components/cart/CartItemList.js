import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, removePriceToCart } from '../../actions';

const CartItemList = ({ cartItems, cartPrice, removeFromCart, removePriceToCart }) => {
    const removeCartItem = item => {
        removePriceToCart(item.price);
        return removeFromCart(item);
    }

    const renderList = () => {
        return cartItems.map(item => {
            return (
                <tr key={item.id} className="cartItem">
                    <td>
                        <Link to={`/product/${item.id}`}>
                            <img className='cartImg' src={item.img} alt={item.title} />
                        </Link>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><span className='iconDelete' onClick={() => removeCartItem(item)}>Delete</span></td>
                </tr>
            )
        })
    }

    return (
        <React.Fragment>
            <h1>Cart List</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.selectedProducts,
        cartPrice: state.cartPrice
    }
}

export default connect(mapStateToProps, { removeFromCart, removePriceToCart })(CartItemList);