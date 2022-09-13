import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ProductIndexItem from "../ProductIndexPage/ProductIndexItem";
// import { getProductReviews } from "../../store/reviews";
import ReviewForm from "../ReviewForm"
import ReviewIndexItem from "../ReviewIndexItem";
import "./index.css"


const ReviewIndex = ({product}) => {
    // const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews))
    const sessionUser = useSelector(state => state.session.user)
    // const users = useSelector(state => state.users)
    

    let form; 

    if (sessionUser){
        form = (
            <ReviewForm/>
        )
    }else{
        form = (
            <div></div>
        )
    }

    return(
        <>
            <div>
                <ul>
                    <h2 id="review-section">Reviews</h2>
                    {reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ReviewIndex