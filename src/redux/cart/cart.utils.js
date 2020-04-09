export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find( iter => ( iter.id===cartItemToAdd.id ))
    if (existing) {
       return cartItems.map( (iter) => {
           return ( iter.id===cartItemToAdd.id ) 
            ? { ...iter, qty: iter.qty+1 } 
            : iter
       }) 
    } else {
       return [ ...cartItems, { ...cartItemToAdd, qty: 1 } ]
    }
}