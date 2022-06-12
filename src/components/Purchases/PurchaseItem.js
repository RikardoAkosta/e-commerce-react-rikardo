import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseItem = ({ purchase }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options);

    const navigate = useNavigate();

    return (
        <div className='purchase-item'>
            <div className="header">
                <b>{ date }</b>
            </div>
            <ul className='purchase-products-list'>
            {
                purchase.cart.products.map(productItem => (
                    <li 
                        key={productItem.id}
                        onClick={() => navigate(`/product/${productItem.id}`)}
                        className='product-item'
                    >
                        <div className="image">
                            {/* <img src={productItem.product.images[0]} alt="" /> */}
                        </div>
                        <div className="name">
                            {productItem.title}
                        </div>
                        <div className="quantity">
                            <div className="box">{productItem.productsInCart.quantity}</div>
                        </div>
                        <div className="price">
                            $ {productItem.price}
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default PurchaseItem;