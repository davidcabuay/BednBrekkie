import React from 'react';
import { Link } from 'react-router-dom';

import ReviewSnip from '../Reviews/ReviewSnip';
import './listing.css'


export default function ListingIndexItem({listing}){



    return(
        <>
            <Link to={`/listings/${listing.id}`} className="listItem">
                <div><img src={listing.photoUrls[0]} alt="listing" className="item-img"/></div>
                {/* <div><img src={tempImg} alt='placeholder'className="item-img"/></div> */}
                <ul className='item-text'>
                    <li className='boldtextflex'>
                        <div>{listing.address}, {listing.city}</div>
                        <div className="starrating"><ReviewSnip listing={listing} /></div>
                        </li>
                    <li className='listingtitle'>{listing.title}</li>
                    <li><span className='boldtext'>${listing.price}</span>  night</li>
                </ul>
            </Link>
        </>
    )

}