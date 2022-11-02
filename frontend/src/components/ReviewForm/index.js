import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import "./index.css"
import {createReview, updateReview} from "../../store/reviews.js"
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";


const ReviewForm = ({setShowReviewForm, product, selectedReview}) => {
    
    const {productId} = useParams();
    const sessionUser = useSelector(state => state.session.user)
    
    let editReview = true;

    if (!selectedReview){
        selectedReview = {
            body: "",
            rating: 0
        }
        editReview = false
    }

    const dispatch = useDispatch();

    const [body, setBody] = useState(selectedReview.body)
    const [rating, setRating] = useState(selectedReview.rating)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const reviewData = {review: {id: selectedReview.id, body: body, rating: rating, productId: productId, authorId: sessionUser.id}}
        if (editReview){
            dispatch(updateReview(selectedReview.id, reviewData))
        }else{
            dispatch(createReview(reviewData))
        }
        
        setShowReviewForm(false)
    }

    return(
        <>
        <div className="background-blur" onClick={()=> setShowReviewForm(false)}></div>
        <div className="background-modal">
            <div className="review-modal">
                <div id="modal-product-name">
                    <div id="product-title">{product.name}</div>
                    <div id="product-cat-modal">{product.category}</div>
                </div>
                <form className="review-form" onSubmit={handleSubmit}>
                    <label className="rating-box">Rating:
                        <div id="rating-stars">
                        {[...Array(5)].map((star,i) => {
                            const ratingValue = i + 1;
                            
                            return(
                                <label >
                                    <input 
                                    type="radio"
                                    name="rating"  
                                    value={ratingValue} 
                                    onClick={(e)=> setRating(e.target.value)}>
                                    </input>
                                    <FaStar className="star" color={ratingValue <= (rating) ? "#ecc8f8" : "#e4e5e9"}/>
                                </label>
                                
                            )
                        })}
                        </div>
                    </label>
                    <label>Review:
                        <input type="text" value={body} onChange={(e)=> setBody(e.target.value)} required ></input>
                    </label>
                    <button type="submit" >Post Review</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ReviewForm