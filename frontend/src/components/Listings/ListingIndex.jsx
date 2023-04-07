import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListingIndexItem from './ListingIndexItem';
import { getListings, fetchListings } from '../../store/listing';
import IndexMap from '../Map/IndexMap';
import './listing.css'

export default function ListingIndex(){
    const dispatch = useDispatch();
    // const listings = useSelector(getListings);
    const listings = useSelector(getListings);
    const [showMap, setShowMap] = useState(false)

    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])

    const toggleMap = () =>{
        setShowMap(!showMap)
        if (showMap){
            document.getElementById("toggle-button").innerHTML = "Map";
        }else{
            document.getElementById("toggle-button").innerHTML = "Listings";
        }
    }

    if (!listings) {
        return null
    }else{
    return(
        <>
        {showMap && (
            <div>
                <IndexMap />
            </div>
        )}
        {!showMap && (
            <div className='indexpage'>
                <div className = "listingscontainer">{listings.map((listing)=> <ListingIndexItem key={listing.id} listing={listing} className="listItem"/>)}</div>
            </div>
        )}
        <div className='toggle-container' >
            <button onClick={toggleMap} id="toggle-button">Map</button>
        </div>
    
        </>)
    }
}