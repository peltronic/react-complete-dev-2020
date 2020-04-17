import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item: { name, imageUrl, qty, price } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="Cart Item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {qty} x ${price}
            </span>
        </div>
    </div>
)

export default CartItem