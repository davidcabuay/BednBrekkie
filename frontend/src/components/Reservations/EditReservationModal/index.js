import React from "react";
import { updateReservation } from "../../../store/reservation";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchListing, getListing } from "../../../store/listing";
import { fetchReservation, getReservation } from "../../../store/reservation";
import { useSelector } from "react-redux";

export default function EditReservationModal({reservation, numOfGuests, onCancel}){
    const dispatch = useDispatch();
    const [numGuest, setNumGuest] = useState(numOfGuests)
    const listing = useSelector(getListing(reservation.listingId))
    // const updatedReservation = useSelector(getReservation(reservation.id))
    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
        // dispatch(fetchReservation(reservation.id))
    }, [dispatch, reservation.listingId])


    const addGuest = (e) =>{
        e.preventDefault();
        if (numGuest<listing.numOfGuests){
            setNumGuest(numGuest+1)
        }
    }
    const subtractGuest = (e) =>{
        e.preventDefault();
        if (numGuest>1){
            setNumGuest(numGuest-1)
        }
    }

    const handleEdit = () => {
        const resData = {
            id: reservation.id,
            listing_id: reservation.listingId, 
            booker_id: reservation.bookerId, 
            check_in: reservation.checkIn, 
            check_out: reservation.checkOut, 
            num_of_guests: numGuest}
        dispatch(updateReservation(resData))
        onCancel();
    }

    return(
        <div>
            <div>Number of Guests</div>
            <div className='guestChanger'>
                <button onClick={subtractGuest}>-</button>
                <div>{numGuest}</div>
                <button onClick={addGuest}>+</button>
            </div>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={handleEdit}>Confirm</button>
        </div>
    )
}