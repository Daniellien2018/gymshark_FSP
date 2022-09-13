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
    

    return(
        <>
        <div className="review-box">
            <h2>Rating:{review.rating}</h2>
            <h2>{getName()}</h2>
            <p>Text: {review.review}</p>
            
            <p>{review.createdAt}</p>
            <p>{review.updatedAt}</p>
        </div>
        </>
    )
}

export default ReviewIndexItem