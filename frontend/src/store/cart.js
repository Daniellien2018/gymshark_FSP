import csrfFetch from "./csrf";
//actions
const RECEIVE_ITEMS = `cartItems/RECEIVE__ITEMS`
const RECEIVE_ITEM = `cartItems/RECEIVE_ITEM`
const REMOVE_ITEM = `cartItems/REMOVE_ITEM`

export const receiveItem = cartItem => ({
    type: RECEIVE_ITEM,
    payload: cartItem 
})
export const receiveItems = cartItems => ({
    type: RECEIVE_ITEMS,
    payload: cartItems
})
export const removeItem = cartItemId => ({
    type: REMOVE_ITEM,
    payload: cartItemId
})
//selectors
export const getCartItem = productId => state => {
    if (!state.cartItems){
        return null
    }else{
        return state.cartItems[productId]
    }
}
export const getCartItems = state => {
    if (!state.cartItems){
        return []
    }else{
        return Object.values(state.cartItems)
    }
}

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch(`/api/cart_items`)
    const cartItems = await res.json();
    dispatch(receiveItems(cartItems))
}

export const createCartItem = (cartData) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items`, {
        method: "POST",
        body: JSON.stringify(cartData),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const cartItem = await res.json();
    dispatch(receiveItem(cartItem))
}

export const updateCartItem = (cartData) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartData.cartItem.id}`,{
        method: "PATCH",
        body: JSON.stringify(cartData),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const cartItem = await res.json()
    dispatch(receiveItem(cartItem));
}

export const deleteCartItem = (cartItem) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: "DELETE",
    })
    dispatch(removeItem(cartItem.productId))
}

//reducer

const cartReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = {...state}
    
    switch(action.type) {
        case RECEIVE_ITEMS:
            return action.cartItems;
        case RECEIVE_ITEM:
            newState[action.cartItem.id] = action.cartItem
            return newState
        case REMOVE_ITEM:
            delete newState[action.cartItemId]
            return newState
        default:
            return state
    }
}

export default cartReducer