import React from 'react';
import { connect} from 'react-redux';
import { fetchProducts } from '../../actions';
import ProductWidget from './ProductWidget';

class ProductList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
        console.log(this.props);
    }

    renderProductList() {
        return this.props.products.map(item => {
            return <ProductWidget product={item} />
        })
    } 

    render() {
        return (
            <div className="containerPadding">
                <h1>Creative collections</h1>
                <div className="productList">
                {this.renderProductList()}
                </div>
            </div>
        )
    }    
}

const mapStatetoProps = state => {
    console.log(state);
    return {
        products: state.products
    }
}

export default connect(mapStatetoProps, { fetchProducts })(ProductList);