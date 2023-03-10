
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
                    <ReviewLine listing={listing}/>
                    <div className='listaddress'>{listing.address}, {listing.city}</div>
                </div>

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
                            <div className="maindesc">What this place offers</div>
                            <div className='flex'>
                                <div >
                                    <div> <i class="fa-solid fa-umbrella-beach"></i> Ocean view</div>
                                    <div> <i class="fa-solid fa-mountain"></i> Mountain View</div>
                                    <div> <i class="fa-solid fa-kitchen-set"></i> Kitchen</div>
                                </div>
                                <div>
                                    <div> <i class="fa-solid fa-wifi"></i> Wifi</div>
                                    <div> <i class="fa-solid fa-car"></i> Free Parking</div>
                                    <div> <i class="fa-solid fa-house-laptop"></i> Dedicated workspace</div>
                                </div>
                                <div>
                                    <div> <i class="fa-solid fa-key"></i> Self Check-in</div>
                                    <div> <i class="fa-solid fa-bath"></i> Bathtub</div>
                                    <div> <i class="fa-solid fa-tv"></i> TV</div>
                                </div>
                            </div>
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