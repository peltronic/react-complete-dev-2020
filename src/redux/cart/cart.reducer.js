//import { UserActionTypes } from "../user/user.types"
import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer