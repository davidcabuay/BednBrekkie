import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
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
    console.log("SESSIONUSER", sessionUser.id)
    console.log("Review", review.listingId)
    console.log("reviewId",review.id)

    const handleSubmit = async(e) => {
        e.preventDefault();
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
    }
    return(
        <div className="ratingformwrapper">
            <div>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                    <StarRateRoundedIcon style={{fontSize:'18px', marginTop:'-2px'}}/>
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
                <button className="reviewButton" onClick={handleSubmit}>Update Review</button>
                <button className="cancelbutton" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}