import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
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

    // if (sessionUser){
    //     form = (
    //         <ReviewForm/>
    //     )
    // }else{
    //     form = (
    //         <div></div>
    //     )
    // }
    

    return(
        <>
            <div>
                <ul>
                    <h2 id="review-section">Reviews</h2>
                    <div id="review-box">
                        <button id="write-review" onClick={() => setShowReviewForm(true)}>Write a Review</button>
                    </div>
                    {reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id}/>
                    ))}
                </ul>
            </div>
            {showReviewForm && <ReviewForm setShowReviewForm={setShowReviewForm} product={product} selectedReview={selectedReview} />}
        </>
    )
}

export default ReviewIndex