import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import { getProductReviews } from "../../store/reviews";
import ProductIndexItem from "../ProductIndexPage/ProductIndexItem";
// import { getProductReviews } from "../../store/reviews";
import ReviewForm from "../ReviewForm"
import ReviewIndexItem from "../ReviewIndexItem";
import "./index.css"


const ReviewIndex = ({product}) => {
    const reviews = useSelector(state => Object.values(state.reviews))
    const sessionUser = useSelector(state => state.session.user)
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [selectedReview, setSelectedReview] = useState();

    let form; 

    const hasReview = () => {
        for (let review of reviews) {
            if (review.authorId === sessionUser.id && review.productId === product.id) {
                return true;
            }
        }

        return false;
    }


    if (!sessionUser) {
        form = (
            <div>
                <p>Must be logged in to write a review</p>
                {/* <NavLink exact to={"/login"}>Log In Here!</NavLink> */}
            </div>
        )
    } else if (sessionUser && !hasReview()) {
        form = (
            <button id="write-review" onClick={() => setShowReviewForm(true)}>Write a Review</button>
        )
    } else {
        form = <div>You have already reviewed this item.</div>
    }

    let reviewShow;

    if (reviews.length > 0){
        reviewShow = (
            <div>
            {reviews.map(review => (
                <ReviewIndexItem review={review} 
                key={review.id} 
                setShowReviewForm={setShowReviewForm}
                setSelectedReview={setSelectedReview}/>
            ))}
            </div>
        )
    }else{
        reviewShow = (
            <div><p>There are no reviews for this product yet</p></div>
        )
    }
    

    return(
        <>
            <div>
                <ul>
                    <h2 id="review-section">Reviews</h2>
                    <div id="review-box">
                        {form}
                    </div>
                    {reviewShow}
                </ul>
            </div>
            {showReviewForm && <ReviewForm setShowReviewForm={setShowReviewForm} product={product} selectedReview={selectedReview} />}
        </>
    )
}

export default ReviewIndex