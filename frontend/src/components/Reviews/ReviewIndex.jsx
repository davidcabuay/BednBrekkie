import { useSelect } from "@mui/base";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, fetchReviews } from "../../store/review";
import ReviewIndexItem from "./ReviewIndexItem";
import ReviewForm from "./ReviewForm";
import { Modal } from "../../context/Modal";
import ReviewRatings from "./ReviewRatings";

export default function ReviewIndex({listing}){
    const dispatch = useDispatch();
    let reviews = useSelector(getReviews);
  

    let listingReviews = reviews.filter(review =>
        review.listingId === listing.id)


    useEffect(()=>{
        dispatch(fetchReviews())
    }, [dispatch])

    const [reviewModal, setReviewModal] = useState(false);
    
    const handleReviewClick = () => {
        setReviewModal(true);
    };

    const handleCancelReview = () => {
        setReviewModal(false);
    }
    
    const sessionUser = useSelector(state => state.session.user);
    let reviewContainer;
        if (sessionUser){
            reviewContainer = 
                <button className="reviewbutton" onClick={handleReviewClick}>Write a Review</button>
        }else{
            reviewContainer = <></>
        }

        
    return(
        <>
            <div><ReviewRatings reviews={listingReviews}/></div>
            {reviewContainer}
            <div>{listingReviews.map((review)=> <ReviewIndexItem key={review.id} review={review}/>)}</div>
            {reviewModal && (
                <Modal onClose={() => setReviewModal(false)}>
                    <ReviewForm 
                        listing={listing}
                        onCancel={handleCancelReview}/>
                </Modal>
            )}
        </>
    )
}