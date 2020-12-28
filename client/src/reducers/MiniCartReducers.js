const MiniCartReducers =  (state=[], action) => {
    switch (action.type) {
    case 'ADD_TO_CART':
        return [...state, action.payload]
    case 'REMOVE_FROM_CART':
        return state.filter(item => item !== action.payload)
    default:
        return state;
    }
}

export default MiniCartReducers;