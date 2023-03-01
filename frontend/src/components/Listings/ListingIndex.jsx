import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListingIndexItem from './ListingIndexItem';
import { getListings, fetchListings } from '../../store/listing';

export default function ListingIndex(){
    const dispatch = useDispatch();
    const listings = useSelector(getListings);

    useEffect(()=>{
        dispatch(fetchListings())
    }, [dispatch])

    return(
        <>
        <ul>{listings.map((listing)=> <ListingIndexItem listing={listing}/>)}</ul>
        </>
    )
}