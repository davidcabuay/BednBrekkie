import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listing";
import placeholderImg from './bruno.png';
import './listingShow.css'

export default function ListingShow(){
    const dispatch = useDispatch();
    const tempImg = placeholderImg;
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    if (!listing) return null;
    console.log(listing)
    return(
        <>
            <div className="showpage">
                <div className="title">{listing.title}</div>
                <div className="titledesc"> 1 Review {listing.address}, {listing.city}</div>

                <div className="grid-container">
                    <div className="big-img"><img src={tempImg} alt='placeholder' /></div>
                    <div className="topleft-img"><img src={tempImg} alt='placeholder' /></div>
                    <div className="topright-img"><img src={tempImg} alt='placeholder' /></div>
                    <div className="botleft-img"><img src={tempImg} alt='placeholder' /></div>
                    <div className="botright-img"><img src={tempImg} alt='placeholder' /></div>
                </div>
                <div className="showcontainers">
                    <div className="leftcontainer">
                        <div className="showcontainer1">
                            <p className="maindesc">{listing.title}</p>
                            <p className="minordesc">{listing.numOfGuests} guests • {listing.numOfBeds} bedrooms • {listing.numOfBaths} bathrooms</p>
                            
                        </div>
                        <div className="showcontainer2">
                            <p> description placeholder text description placeholder text description placeholder text description placeholder text description placeholder text description placeholder text description placeholder text</p>
                        </div>
                        <div className="extras">
                            <h3>What this place offers</h3>
                            <div> Lake view</div>
                            <div> Mountain View</div>
                            <div> Kitchen</div>
                            <div> Wifi</div>
                            <div> Dedicated workspace</div>
                        </div>
                        <div className="reviewsection"> Review Section Placeholder</div>
                    </div>
                    <div className="rightcontainer">
                        <div className="reservation">
                            <div>${listing.price} night</div>
                            <div>calendar placeholder</div>
                            <div>reservation placeholder</div>
                        </div>
                    </div>
                </div>
            
                <Link to='/'>Index Page</Link>
            </div>
        </>
    )
}