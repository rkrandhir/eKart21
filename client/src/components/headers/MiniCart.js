import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, removePriceToCart } from './../../actions';

class MiniCart extends React.Component {
    removeCartItem(item) {
        this.props.removePriceToCart(item.price);
        return this.props.removeFromCart(item);
    }

    renderList() {
        return this.props.cartItems.map(item => {
            return (
                <div keys={item.id} className="miniCartItem">
                    <div className="miniCartImgWrap">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="miniCartItemDetails">
                        <div className="miniCartTitleCont">
                            <span className="miniCartTitle">{item.name}</span>
                            <span className='iconDelete' onClick={() => this.removeCartItem(item)}>Delete</span>
                        </div>
                        <p>INR {item.price}</p>                            
                    </div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className='miniCart'>
                <div className='miniCartItemWrap'>
                    {this.renderList()}
                </div>
                <div className="miniCartTotalWrap">
					<div className="totalPrice">Total: <span><span className="inr">INR</span> {this.props.cartPrice}</span></div>
					<div className="btnViewCart">VIEW BAG</div>
				</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems : state.selectedProducts,
        cartPrice : state.cartPrice
    }
}
export default connect(mapStateToProps, { removeFromCart, removePriceToCart })(MiniCart);