import React from "react";
import { useSelector } from "react-redux";
import './index.css'



const ReviewIndexItem = ({ review }) => {
    const users = useSelector(state => Object.values(state.users))
    const getName = () => {
        for (let user of users) {
            if (review.authorId === user.id) {
                return user.username;
            }
        }
    }


    
    const starRating = () =>{
        let rate = review.rating
        if (rate === 1){
            return(
                <div>
                    <span class="fa fa-star checked"></span>
                </div>
            )
        }else if (rate === 2){
            return(
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            )
        }else if (rate === 3){
            return(
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            )
        }else if (rate === 4){
            return(
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            )
        }else if (rate === 5){
            return(
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            )
        }
    }
    
    const date = () =>{
        let time = review.createdAt

    }

    return(
        <>
        <div className="review-box">
            <h2 id="rating">Rating:{starRating()}</h2>
            <p>{review.review}</p>
            <p>{getName()}</p>
            <p>{review.createdAt}</p>
            {/* <p>{review.updatedAt}</p> */}
        </div>
        </>
    )
}

export default ReviewIndexItem