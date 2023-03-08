import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListingIndexItem from './ListingIndexItem';
import { getListings, fetchListings } from '../../store/listing';
import './listing.css'

export default function ListingIndex(){
    const dispatch = useDispatch();
    // const listings = useSelector(getListings);
    const listings = useSelector(getListings);


    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])


    if (!listings) {
        return null
    }else{
    return(
        <div className='indexpage'>
        <div className = "listingscontainer">{listings.map((listing)=> <ListingIndexItem key={listing.id} listing={listing} className="listItem"/>)}</div>
        </div>
    )
    }
}