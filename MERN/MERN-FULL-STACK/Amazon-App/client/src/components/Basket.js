import React from 'react';

const Basket = (props) => {
    const {cartItems} = props;
    return(
        <div>
            {cartItems.length === 0 && <div> 0 </div>}
        </div>
    )
}

export default Basket;