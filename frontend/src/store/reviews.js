import csrfFetch from "./csrf";
import {addUser} from "./users"
import {addProduct} from "./products"

const ADD_REVIEW = `reviews/ADD_REVIEW`
const ADD_REVIEWS =  `reviews/ADD_REVIEWS`
const REMOVE_REVIEWS = `reviews/REMOVE_REVIEWS`

const addReview = review => ({
    type: ADD_REVIEW,
    payload: review
})
const removeReview = review => ({
    type: REMOVE_REVIEWS,
    payload: review
})

export const addReviews = reviews => ({
    type: ADD_REVIEWS,
    payload: reviews
})



export const createReview = (review) => async dispatch => {
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(review)
    });
    const reviewData = await res.json()
    dispatch(addReview(reviewData.review))
    dispatch(addUser(reviewData.addUser))
    dispatch(addProduct(reviewData.product))
    return res
}

export const destroyReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })
    const reviewData = await res.json();
    dispatch(removeReview(reviewData.review))
    dispatch(addProduct(reviewData.product))
    return res
}

const reviewsReducer = (state={}, action) => {
    Object.freeze(state)

    
}