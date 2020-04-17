import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'
import { removeItemFromCart } from '../../redux/cart/cart.utils'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {

    const { name, imageUrl, price, qty } = cartItem

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{qty}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem:    item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem:  item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)