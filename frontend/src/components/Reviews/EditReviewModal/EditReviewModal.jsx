import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../review.css'
import { updateReview } from "../../../store/review";

export default function EditReviewModal({review, onCancel}){
    const dispatch = useDispatch();

    const [body, setBody] = useState(review.body);
    const [cleanliness, setCleanliness] = useState(review.cleanliness);
    const [communication, setCommunication] = useState(review.communication);
    const [checkin, setCheckin] = useState(review.checkIn);
    const [accuracy, setAccuracy] = useState(review.accuracy);
    const [location, setLocation] = useState(review.location);
    const [value, setValue] = useState(review.value);

    const sessionUser = useSelector(state => state.session.user);
    const [showError, setShowError] = useState(false)


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(body.length>0){
        const revData = {
            ...review,
            listing_id: review.listingId,
            author_id: sessionUser.id,
            body: body,
            cleanliness: cleanliness,
            communication: communication,
            check_in: checkin,
            accuracy: accuracy,
            location: location,
            value: value
            
        }
        dispatch(updateReview(revData));
        onCancel();
        }else{
            setShowError(true)
        }
    }
    return(
        <div className="ratingformwrapper">
            <div>
            {showError && (
                    <p className="editErrors">Please add text to your review.</p>
                ) }
                <div className="ratingContainer">
                    <p>Cleanliness</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={cleanliness}
                    onChange={(e)=>setCleanliness(e.target.value)}
                    className = 'slider'
                    />
                    <div>{cleanliness}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div className="ratingContainer">
                    <p>Communication</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={communication}
                    onChange={(e)=>setCommunication(e.target.value)}
                    className = 'slider'
                    />
                    <div>{communication}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div className="ratingContainer">
                    <p>Check In</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={checkin}
                    onChange={(e)=>setCheckin(e.target.value)}
                    className = 'slider'
                    />
                    <div>{checkin}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div className="ratingContainer">
                    <p>Accuracy</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={accuracy}
                    onChange={(e)=>setAccuracy(e.target.value)}
                    className = 'slider'
                    />
                    <div>{accuracy}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div className="ratingContainer">
                    <p>Location</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    className = 'slider'
                    />
                    <div>{location}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div className="ratingContainer">
                    <p>Value</p>
                    <div className="revformcomponent">
                    <input
                    type="range" min="1" max="5"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    className = 'slider'
                    />
                    <div>{value}</div>
                    <i class="fa-solid fa-star"></i>
                    {/* <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/> */}
                    </div>
                </div>
                <div>
                    <textarea
                    value={body}
                    placeholder="Write your review here"
                    onChange={(e)=>setBody(e.target.value)}
                    rows= {10}
                    cols={20}
                    />
                </div>
                <button className="cancelbutton" onClick={onCancel}>Cancel</button>
                <button className="reviewButton" onClick={handleSubmit}>Update Review</button>
            </div>
        </div>
    )
}