import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import { useState } from "react";
import {destroyReview} from "../../store/reviews.js"




const ReviewIndexItem = ({ review }) => {
    const dispatch = useDispatch();
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [selectedReview, setSelectedReview] = useState();
    const sessionUser = useSelector(state => state.session.user)
    
    
    const users = useSelector(state => Object.values(state.users))
    const getName = () => {
        for (let user of users) {
            if (review.authorId === user.id) {
                return user.username;
            }
        }
    }
    const products = useSelector(state => Object.values(state.products))
    const getProduct = () =>{
        for (let product of products){
            if (review.productId === product.id){
                return product.name
            }
        }
    }

    const starRating = () =>{
        let rate = review.rating
        if (rate === 1){
            return(
                <div>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                </div>
            )
        }else if (rate === 2){
            return(
                <div>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                </div>
            )
        }else if (rate === 3){
            return(
                <div>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                    
                </div>
            )
        }else if (rate === 4){
            return(
                <div>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-regular fa-star"></span>
                </div>
            )
        }else if (rate === 5){
            return(
                <div>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                    <span class="fa-solid fa-star"></span>
                </div>
            )
        }
    }
    let deleteUpdateButtons;
    if (sessionUser && sessionUser.id === review.authorId ){
        deleteUpdateButtons = (
                <div id="edit-delete-box">
                    <button id="delete-review-button">
                        <div id="delete-review" onClick={() => dispatch(destroyReview(review.id))}>Delete Review</div>
                    </button>
                    
                    <button id="edit-review-button">
                        <div id="edit-review" 
                        onClick={() => {
                            setSelectedReview(review)
                            setShowReviewForm(true)
                            console.log('hello')
                        }}
                        >Edit Review</div>
                    </button>
                </div>
        )
    }else{
        deleteUpdateButtons = (
            <div></div>
        )
    }

    return(
        <>
        <div className="review-box">
            <div id="top-box">
                <h2 id="rating">Rating:{starRating()}</h2>
                {deleteUpdateButtons}
            </div>
            <p>{getProduct()}</p>
            <p>{review.body}</p>
            <p>User: {getName()}</p>
            <p>Posted On: {review.createdAt}</p>

        </div>
        </>
    )
}

export default ReviewIndexItem