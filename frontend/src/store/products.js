import csrfFetch from "./csrf"

export const RECEIVE_PRODUCTS = `products/RECEIVE_PRODUCTS`
export const RECEIVE_PRODUCT = `products/RECEIVE_PRODUCT`

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    payload : products
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    payload : product
})

export const getProducts = state => {
    if (!state.products){
        return []
    }else{
        return Object.values(state.products)
    }
}

export const getProduct = productId => state =>{
    if (!state){
        return null
    }else if (!state.products){
        return null
    }else{
        return state.products[productId]
    }
}

export const fetchProducts = () => async dispatch =>{
    const res = await csrfFetch(`/api/products`)
    const products = await res.json()
    dispatch(receiveProducts(products))
    
}

export const fetchProduct = productId => async dispatch =>{
    const res = await csrfFetch(`/api/products/${productId}`) //productId
    const data = await res.json()
    dispatch(receiveProduct(data));
    return res
}

const productsReducer = (state={}, action) => {
    Object.freeze(state)
    const newState = {...state}

    switch(action.type){
        case RECEIVE_PRODUCT:
            newState[action.payload.product.id] = action.payload.product;
            return newState
        case RECEIVE_PRODUCTS:
            return action.payload.products
        default:
            return newState
    }
}

export default productsReducer

