import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from './bruno.png';
import './listing.css'


export default function ListingIndexItem({listing}){
    const tempImg = placeholderImg


    return(
        <>
            <Link to={`/listings/${listing.id}`} className="listItem">
                <div><img src={tempImg} alt='placeholder'className="item-img"/></div>
                <ul>
                    <li>{listing.address}, {listing.city}</li>
                    <li>{listing.title}</li>
                    <li>${listing.price} night</li>
                </ul>
            </Link>
        </>
    )

}