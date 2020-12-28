const CartPriceReducers = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_PRICE_TO_CART':
            return (state + parseFloat(action.payload))
        case 'REMOVE_PRICE_TO_CART':
            return (state - parseFloat(action.payload))
        default:
            return state
    }
}

export default CartPriceReducers