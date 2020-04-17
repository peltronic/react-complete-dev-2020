export const addItemToCart = (cartItems, cartItemToAdd) => {
   const existing = cartItems.find(iter => (iter.id === cartItemToAdd.id))
   if (existing) {
      return cartItems.map((iter) => {
         return (iter.id === cartItemToAdd.id)
            ? { ...iter, qty: iter.qty + 1 }
            : iter
      })
   } else {
      return [...cartItems, { ...cartItemToAdd, qty: 1 }]
   }
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
   const existing = cartItems.find( iter => iter.id===itemToRemove.id )

   if ( existing.qty === 1 ) {
      return cartItems.filter( iter => iter.id !== itemToRemove.id )
   }

   return cartItems.map( iter => {
     return iter.id===itemToRemove.id ? {...iter, qty: iter.qty-1}  : iter
   })
}