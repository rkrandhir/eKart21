import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import MiniCartPanel from './MiniCartPanel';

class TopNav extends React.Component {
    renderCartItemNumer() {
        if(this.props.cartItems.length > 0) return <span>({this.props.cartItems.length})</span>
    }

    showCart() {
        return console.log('miniCart')
    }

    render() {
        return (
            <React.Fragment>
            <ul className="navItems">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/productList'>Products</Link></li>
                <li>
                    <button type='button' onClick={() => this.showCart()}>
                        My Cart {this.renderCartItemNumer()}
                    </button>
                </li>
            </ul>
            <div className="myMiniCart">
                <MiniCartPanel cartItems={this.props.cartItems} />
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        cartItems: state.selectedProducts
    }
}

export default connect(mapStateToProps, { })(TopNav);


