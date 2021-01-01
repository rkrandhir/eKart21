import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import ProductWidget from './ProductWidget';

const ProductList = ({ fetchProducts, products }) => {
    useEffect(() => {
        fetchProducts()
    });

    const renderProductList = () => {
        return products.map(item => {
            return <ProductWidget key={item.id} product={item} />
        })
    }

    return (
        <div className="containerPadding">
            <h1>Creative collections</h1>
            <div className="productList">
                {renderProductList()}
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStatetoProps, { fetchProducts })(ProductList);