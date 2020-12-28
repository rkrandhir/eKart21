import React from 'react';

const EmptyMiniCart = () => {
    return (
        <div className="emptyMiniCart">
            <img src="http://www.rkrandhir.com/assets/images/shoppingcart-empty.png" alt="No cart Item" />
            <div className="emptyMsg">
                <p>Shopping Cart is Emply!</p>
                <p>Please select from our creative collections.</p>
            </div>
        </div>
    )
}

export default EmptyMiniCart;