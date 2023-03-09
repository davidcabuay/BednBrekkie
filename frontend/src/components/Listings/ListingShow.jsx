import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import ReservationForm from "../Reservations/ReservationForm";
import ReviewIndex from '../Reviews/ReviewIndex';
import ReviewLine from '../Reviews/ReviewLine';
import './listingShow.css'

export default function ListingShow(){
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    
    if (!listing) {
        return null
    }else{
    
    return(
        <>
            <div className="showpage">
                <div className="title">{listing.title}</div>
                <div className="titledesc"> 
                {<ReviewLine listing={listing}/>}__ {listing.address}, {listing.city}</div>

                <div className="grid-container">
                    <div className="big-img"><img src={listing.photoUrls[0]} alt="house" /></div>
                    <div className="topleft-img"><img src={listing.photoUrls[1]} alt="house" /></div>
                    <div className="topright-img"><img src={listing.photoUrls[2]} alt="house" /></div>
                    <div className="botleft-img"><img src={listing.photoUrls[3]} alt="house" /></div>
                    <div className="botright-img"><img src={listing.photoUrls[4]} alt="house" /></div>

                </div>
                <div className="showcontainers">
                    <div className="leftcontainer">
                        <div className="showcontainer1">
                            <p className="maindesc">Entire home hosted by {listing.host}</p>
                            <p className="minordesc">{listing.numOfGuests} guests • {listing.numOfBeds} bedrooms • {listing.numOfBaths} bathrooms</p>
                            
                        </div>
                        <div className="showcontainer2">
                            <p> {listing.description}</p>
                        </div>
                        <div className="extras">
                            <h3>What this place offers</h3>
                            <div><WifiRoundedIcon/> Lake view</div>
                            <div> Mountain View</div>
                            <div> Kitchen</div>
                            <div> Wifi</div>
                            <div> Dedicated workspace</div>
                        </div>
                        <div className="reviewsection"> 
                            <ReviewIndex listing={listing}/>
                        </div>
                    </div>
                    <div className="rightcontainer">
                        <ReservationForm listing={listing}/>
                        <div className="reservation">
                            {/* <div>${listing.price} night</div>
                            <div>calendar placeholder</div>
                            <div>reservation placeholder</div> */}
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )

    }

}