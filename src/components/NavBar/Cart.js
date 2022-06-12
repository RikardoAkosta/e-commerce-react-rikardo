import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCartThunk } from '../../redux/actions/cartActions';
import { purchaseCartThunk } from '../../redux/actions/purchasesActions';
import '../../styles/cart.css';

const Cart = ({ handleClose }) => {

    const cartProducts = useSelector(state => state.cart?.products);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let total = 0;

    if(cartProducts?.length > 0){
        if(cartProducts?.length > 1){
            total = cartProducts?.reduce((initial, current) => {
                if(typeof initial === 'number'){
                    return initial + (current.price * current.productsInCart?.quantity)
                } else {
                    return (initial.price * initial.productsInCart?.quantity)  +  (current.price * current.productsInCart?.quantity)
                }
            });
        } else {
            total = cartProducts?.[0].price * cartProducts?.[0].productsInCart?.quantity
        }
    }
    
    const checkout = () => {
        dispatch(purchaseCartThunk());
        navigate("/purchases");
        handleClose();
    }

    return (
        <div className='cart'>
            <div className="minimalist-scrollbar">

                <h4>Carrito de compras</h4>

                <ul className="cart-products-list">
                    {
                        cartProducts?.map(product => (
                            <li key={product.id}>
                                <div className="product-info">
                                    {/* <img src={product.images[0]} alt="" /> */}
                                    <div className='details'>
                                        <span className="brand">{product.brand}</span>
                                        <Link 
                                            to={`/product/${product.id}`} 
                                            className="name" 
                                            onClick={handleClose}
                                        >
                                            {product.title}
                                        </Link>
                                        <div className="quantity">
                                            {product.productsInCart?.quantity}
                                        </div>
                                    </div>
                                    <div className="button-delete">
                                        <button onClick={() => dispatch(removeFromCartThunk(product.id))}>
                                            <i className="icon-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="total">
                                    <span className="label">Total: </span>
                                    <b>$ {product.price * product.productsInCart?.quantity}</b>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="checkout-section">
                <div className="total">
                    <span className="label">Total:</span>
                    <b>$ {total}</b>
                </div>

                <button className='buy-button' onClick={checkout} disabled={!Boolean(cartProducts)}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
