import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function ReviewForm({listing, onCancel}){
    const dispatch = useDispatch();

    const [body, setBody] = useState("");
    const [cleanliness, setCleanliness] = useState(1);
    const [communication, setCommunication] = useState(1);
    const [checkin, setCheckin] = useState(1);
    const [accuracy, setAccuracy] = useState(1);
    const [location, setLocation] = useState(1);
    const [value, setValue] = useState(1);

    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const revData = {
            listing_id: listing.id,
            author_id: sessionUser.id,
            body: body,
            cleanliness: cleanliness,
            communication: communication,
            check_in: checkin,
            accuracy: accuracy,
            location: location,
            value: value
        }
        dispatch(createReview(revData));
        onCancel();
    }
    return(
        <div className="ratingformwrapper">
            <form onSubmit={handleSubmit}>
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
                <button className="reviewButton">Submit Review</button>
            </form>
        </div>
    )
}