/* import ProductApi from './../apis/ProductApi'; */
import testData from  './../Assets/data/product.json';


/*******************************
GET THE PRODUCT LIST 
*******************************/

export const fetchProducts = () => async dispatch => {
    // const {data} = await ProductApi.get('/photos');

    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: testData //response.data
    })
}

/*******************************
 ADD TO CART 
*******************************/

export const addToCart = item => async dispatch => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: item
    })
}

export const addPriceToCart = item => async dispatch => {
    dispatch({
        type: 'ADD_PRICE_TO_CART',
        payload: item
    })
}

/*******************************
REMOVE FROM CART 
*******************************/

export const removeFromCart = item => async dispatch => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: item
    })
}

export const removePriceToCart = item => async dispatch => {
    dispatch({
        type: 'REMOVE_PRICE_TO_CART',
        payload: item
    })
}