import React from 'react';
import { Link } from 'react-router-dom';
import './reservation.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../../../store/reservation';
import { Modal } from '../../../context/Modal';
import DeleteReservationModal from '../DeleteReservationModal';
import { useState, useEffect } from 'react';
import EditReservationModal from '../EditReservationModal';
import { getListing, fetchListing } from '../../../store/listing';


export default function ListingIndexItem({reservation}){
    const dispatch = useDispatch();
    const listing = useSelector(getListing(reservation.listingId))
    
    useEffect(()=>{
        dispatch(fetchListing(reservation.listingId))
    }, [dispatch, reservation.listingId])
    

    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteClick = () => {
        setDeleteModal(true);
    };

    const handleCancelDelete = () => {
        setDeleteModal(false);
    };

    const handleEditClick = () => {
        setEditModal(true);
    };

    const handleCancelEdit = () => {
        setEditModal(false);
    }




    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const cin = new Date(reservation.checkIn);
    const cout = new Date(reservation.checkOut);
    const checkInDay = cin.toLocaleDateString("en-US", options)
    const checkOutDay = cout.toLocaleDateString("en-US", options)

    return(
        <>
            <Link to={`/listings/${listing.id}`} className="listItem">
                <div className='indexItem'>
                    <div>{listing.title}</div>
                    <div><img src={listing.photoUrls[0]} alt="listing" className="res-img"/></div>
                    <div>Booked from {checkInDay} - {checkOutDay}</div>
                    <div className='numg'>Number of Guests:{reservation.numOfGuests}</div>
                    <button onClick={handleDeleteClick}>Delete</button>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            </Link>
                {deleteModal && (
                    <Modal onClose={() => setDeleteModal(false)}>
                        <DeleteReservationModal
                            reservationId = {reservation.id}
                            onCancel={handleCancelDelete}/>
                    </Modal>
                )}
                {editModal && (
                    <Modal onClose={() => setEditModal(false)}>
                    <EditReservationModal
                        reservation = {reservation}
                        numOfGuests = {reservation.numOfGuests}
                        onCancel={handleCancelEdit}/>
                </Modal>
                )}
        </>
    )

}