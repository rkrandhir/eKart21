import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = ({products}) => {
   let {id} = useParams();
    const [product, setproduct] = useState({});
    
    useEffect(() => {
        const getProduct = productId => {
            return setproduct(products.find(item => item.id === parseInt(productId)));
        }

        getProduct(id);
        return () => {
            //clear the product details
            // setproduct({})
        }
    }, [products, id])
    
    
    
     return (
        <div className="productWrap containerPadding">
            <div className="proLeftPanel">
                <img className="proImg" src={product.img} alt={product.name} />    
            </div>
            <div className="proRightPanel">
                <h1>{product.name}</h1>
            </div>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {})(Product);
