import { combineReducers } from 'redux';
import CartPriceReducers from './CartPriceReducers';
import MiniCartReducers from './MiniCartReducers';
import ProductReducers from './ProductReducers';

export default combineReducers ({
    products: ProductReducers,
    selectedProducts: MiniCartReducers,
    cartPrice: CartPriceReducers
})