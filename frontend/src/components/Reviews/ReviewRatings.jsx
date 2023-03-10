import StarRateRounded from "@mui/icons-material/StarRateRounded";
import { useSelector } from "react-redux";
import { getReviews, fetchReviews } from "../../store/review";
import './review.css'


export default function ReviewRatings({reviews}){
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
        <div className="ratingsContainer">
            <div className="starTitle">
                {/* <StarRateRounded style={{marginTop: '-3px'}}className="star"/> */}
                <i class="fa-solid fa-star"></i>
                <div>{avgRating} •  {totalReviews} {totalReviews === 1 ? 'Review': 'Reviews'}</div>
            </div>
            <div className="ratingsWrapper">
                <div className="leftRev">
                    <div className="nameRating">
                        <div>Cleanliness</div>
                        <div className="starReview">
                            <div>
                            {cleanRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="nameRating">
                        <div>Communication</div>
                        <div className="starReview">
                            <div>
                            {commRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="nameRating">
                        <div>Check-in</div>
                        <div className="starReview">
                            <div>
                            {checkinRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="rightRev">
                    <div className="nameRating">
                        <div>Accuracy</div>
                        <div className="starReview">
                            <div>
                            {accRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="nameRating">
                        <div>Location</div>
                        <div  className="starReview">
                            <div>
                            {locRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="nameRating">
                        <div>Value</div>
                        <div className="starReview">
                            <div>
                            {valRatingAvg} 
                            </div>
                            {/* <StarRateRounded style={{fontSize: '14px'}} className="smallstar"/> */}
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

