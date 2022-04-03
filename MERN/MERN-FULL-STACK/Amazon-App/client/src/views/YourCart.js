import { Divider } from '@mui/material';
import React, {useContext, useState} from 'react';
import CartContext from '../context/CartContext';
import '../css/cart.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
var store = require('store')

const YourCart = (props) => {
    const {basket, setBasket} = useContext(CartContext)
    // const [qty, setQty] = useState({
    //     qty
    // });
    var cart = store.get('cart');
    var total = store.get("total")
    

    const onDeleteHandler = (index) => {
        console.log(index);
    
        const copyState = [...cart];
        copyState.splice(index, 1);
        setBasket(copyState);
        store.set('cart', copyState);
        store.set('total', subTotal(copyState));
    }

    const onUpdateQty = (e, index) => {
        total = store.get("total")
        const cartItems = cart[index];
        cartItems.prodQty = parseInt(e);
        //const newCart = [...cart.slice(0, index), cartItems, ...cart.slice(index + 1)]

        console.log(cart);
        setBasket(cart)
        store.set('cart', cart);
        store.set('total', subTotal(cart))
    }

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    const subTotal = (array) => {
        const total = array.reduce((accumulator, object) => {
            return accumulator +  round((object.price * object.prodQty), 2);
        }, 0)

        store.set('total', total);
        return total;
    }

    return(
        <div className="wrapper">
            <div className="shopping-container">
                <h3 className="shopping-cart-title">Shopping Cart</h3>
                <Divider style={{marginLeft: 20, marginRight: 20}} />
                <div className="cart-container">
                    { cart?.length !== 0 ? <span>
                        {cart.map((item, i) => {
                            return <div key={i} className="prod-container">
                                <span>
                                    <img src={item.productImgURL} alt={item.title} className="product-image"/>
                                </span>
                                <span className="split">
                                    <span className="prod-title">
                                        {item.title}
                                    </span>
                                    <span className="prod-brand">
                                        by: {item.brand}
                                    </span>
                                    <span>
                                    {
                                        item.quantity < 10 ? <h4 style={{ color: 'red'}}>Only {item.quantity} left in stock!</h4>
                                        : item.quantity > 10 && item.quantity < 30 ? <h4 style={{ color: 'red'}}>Low in Stock</h4>
                                        : <h4 style={{ color: 'green'}}>In Stock</h4>
                                    }
                                    </span>
                                    <span className="prod-prime">
                                        <span>{ item.prime === true 
                                            ? <span>
                                                <img className="prime" src="https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/amazon-prime-delivery-checkmark._CB659998231_.png" alt="Prime verification" />
                                                <span>Free Delivery</span>
                                                </span>
                                            : "Free Shipping"}
                                            </span>
                                    </span>
                                    <span className="prod-quantity">
                                        <div className="form-floating mb-3 w-50">
                                            <select className="form-select" aria-label="Default select example" value={cart[i].prodQty} name="qty" onChange={(event) => onUpdateQty(event.target.value, i)}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Quantity</label>
                                        </div>
                                        <span>
                                            <input type="submit" className="btn btn-danger btn-sm" value="Delete" onClick={()=> {onDeleteHandler(i)}}/>
                                        </span>
                                    </span>
                                </span>
                                <span className="prod-price">
                                    ${item.price}
                                </span>
                            </div>
                        })} </span>
                    : <h2 style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100}}>Your Cart is empty! </h2> }
                </div>
            </div>
            <div className="checkout-box">
                <div className="total">
                    <span>Subtotal ({cart?.length < 2 && cart?.length > 1 ? <span>{`${cart.length} item`}</span>  : <span>{`${cart.length} items`}</span>}):</span>
                <span className="price" >
                    ${total}
                </span>
                </div>
                <FormGroup style={{textAlign: "left"}}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="This order contains a gift" />
                </FormGroup>
                <button id="check-out" className="btn btn-warning">Check out Amazon Clone Cart</button>
            </div>
        </div>
    )
}

export default YourCart;