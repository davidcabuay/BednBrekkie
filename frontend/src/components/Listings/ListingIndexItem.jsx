import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from './bruno.png';


export default function ListingIndexItem({listing}){
    const tempImg = placeholderImg
    return(
        <>
            <Link to={`/listings/${listing.id}`}>
                <div><img src={tempImg}/></div>
                <ul>
                    <li>{listing.address},{listing.city}</li>
                    <li>{listing.title}</li>
                    <li>${listing.price} night</li>
                </ul>
            </Link>
        </>
    )

}