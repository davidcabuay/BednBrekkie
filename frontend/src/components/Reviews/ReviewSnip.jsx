
import { useSelector, useDispatch } from "react-redux";
import { getReviews, fetchReviews } from "../../store/review";
import { useEffect } from "react";
import './review.css'



export default function ReviewSnip({listing}){
    const dispatch = useDispatch();
    let allReviews = useSelector(getReviews);


    let reviews = allReviews.filter(review =>
        review.listingId === listing.id)

        useEffect(()=>{
            dispatch(fetchReviews())
        }, [dispatch])
    
    const totalReviews = reviews.length

    let cleanRating = 0
    reviews.forEach((review)=>{
        cleanRating += review.cleanliness
    })
    const cleanRatingAvg = cleanRating ? parseFloat((cleanRating/totalReviews)).toFixed(1) : 5

    let commRating = 0
    reviews.forEach((review)=>{
        commRating += review.communication
    })
    const commRatingAvg = commRating ? parseFloat((commRating/totalReviews)).toFixed(1) : 5

    let checkinRating = 0
    reviews.forEach((review)=>{
        checkinRating += review.checkIn
    })
    const checkinRatingAvg = checkinRating ? parseFloat((checkinRating/totalReviews)).toFixed(1) : 5

    let accRating = 0
    reviews.forEach((review)=>{
        accRating += review.accuracy
    })
    const accRatingAvg = accRating ? parseFloat((accRating/totalReviews)).toFixed(1) : 5

    let locRating = 0
    reviews.forEach((review)=>{
        locRating += review.location
    })
    const locRatingAvg = locRating ? parseFloat((locRating/totalReviews)).toFixed(1) : 5

    let valRating = 0
    reviews.forEach((review)=>{
        valRating += review.value
    })
    const valRatingAvg = valRating ? parseFloat((valRating/totalReviews)).toFixed(1) : 5
    const sumRating = parseFloat(cleanRatingAvg)+parseFloat(commRatingAvg)+parseFloat(checkinRatingAvg)+parseFloat(accRatingAvg)+parseFloat(locRatingAvg)+parseFloat(valRatingAvg)
    const avgRating = Math.round((sumRating)/6*100)/100;

    return(
        <div>
            <div className='starReview'>
                {/* <StarRateRounded style={{fontSize: '14px'}}className='star'/> */}
                <i className="fa-solid fa-star"></i>
                <div>{avgRating}</div>
            </div>
        </div>
    )
}