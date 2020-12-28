import React from 'react';
import { connect } from 'react-redux';
import { addToCart, addPriceToCart } from './../../actions';

class ProductWidget extends React.Component{
        addToCart(product) {
            if(this.props.selectedProducts.find(item => item.id === product.id)) {
                console.log("already added!")
                return;
            } else {
                console.log(product.price)
                this.props.addPriceToCart(product.price);
                return this.props.addToCart(product);
            }
        }

        render() {
            return (
                <div className="productWidget" key={this.props.product.id}>
                    <div className="prodImg">
                        <img src={this.props.product.img} alt={this.props.product.name} />
                    </div>
                    <div className="productTitle">{this.props.product.name}</div>
                    <div className="productPrice">INR {this.props.product.price}</div>
                    <span className="addToCart" onClick={() => this.addToCart(this.props.product)}>Add to cart</span>
                </div>
            )
        }
    }

const mapStateToProps = state => {
    return {
        selectedProducts : state.selectedProducts
    }
}

export default connect(mapStateToProps, { addToCart, addPriceToCart })(ProductWidget);

