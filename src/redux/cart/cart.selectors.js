import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector( 
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (acc, iter) => acc + iter.qty, 0 ) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (acc, iter) => acc + iter.price*iter.qty, 0 )
)