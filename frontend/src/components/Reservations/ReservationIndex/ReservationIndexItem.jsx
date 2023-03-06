import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from '../../Listings/bruno.png';
import './reservation.css'


export default function ListingIndexItem({reservation}){
    const tempImg = placeholderImg

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const cin = new Date(reservation.checkIn);
    const cout = new Date(reservation.checkOut);
    const checkInDay = cin.toLocaleDateString("en-US", options)
    const checkOutDay = cout.toLocaleDateString("en-US", options)

    return(
        <>
            {/* <Link to={`/listings/${listing.id}`} className="listItem">
                <div><img src={tempImg} alt='placeholder'className="item-img"/></div>
                <ul className='item-text'>
                    <li className='boldtext'>{listing.address}, {listing.city}</li>
                    <li>{listing.title}</li>
                    <li><span className='boldtext'>${listing.price}</span>  night</li>
                </ul>
            </Link> */}
            <div>
                <div>{checkInDay} - {checkOutDay}</div>
                <div>{reservation.numOfGuests}</div>
                
            </div>
        </>
    )

}