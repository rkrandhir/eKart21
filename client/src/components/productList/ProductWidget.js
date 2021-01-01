import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart, addPriceToCart } from './../../actions';
import { Link } from 'react-router-dom';

const ProductWidget = ({product, selectedProducts, addToCart, addPriceToCart}) => {
    const [addedToCart, setAddedToCart] = useState(false);
    useEffect(() => {
        setAddedToCart(false)
        return () => {
          
        }
    },[])

    const addItemToCart = product => {
        if (selectedProducts.find(item => item.id === product.id)) {
            setAddedToCart(true)
            return;
        } else {
            setAddedToCart(true)
            addPriceToCart(product.price);
            return addToCart(product);
        }
    }

    return (
        <div className="productWidget">
            <div className="prodImg">
                {addedToCart ? <div className="cartItemMsg">
                    <Link to='/cart'>Go to cart</Link>
                </div> : null }
                <img src={product.img} alt={product.name} />
            </div>
            <Link className="productTitle" to={`/product/${product.id}`}>{product.name}</Link>
            <div className="productPrice">INR {product.price}</div>
            <span 
                className="addToCart" 
                onClick={() => addItemToCart(product)}>Add to cart</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProducts: state.selectedProducts
    }
}

export default connect(mapStateToProps, { addToCart, addPriceToCart })(ProductWidget);

