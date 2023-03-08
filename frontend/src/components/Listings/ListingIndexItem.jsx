import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css'


export default function ListingIndexItem({listing}){



    return(
        <>
            <Link to={`/listings/${listing.id}`} className="listItem">
                <div><img src={listing.photoUrls[0]} alt="listing" className="item-img"/></div>
                {/* <div><img src={tempImg} alt='placeholder'className="item-img"/></div> */}
                <ul className='item-text'>
                    <li className='boldtext'>{listing.address}, {listing.city}</li>
                    <li>{listing.title}</li>
                    <li><span className='boldtext'>${listing.price}</span>  night</li>
                </ul>
            </Link>
        </>
    )

}