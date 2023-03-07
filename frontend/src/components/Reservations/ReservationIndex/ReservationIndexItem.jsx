import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from '../../Listings/bruno.png';
import './reservation.css'
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../../store/reservation';
import { Modal } from '../../../context/Modal';
import DeleteReservationModal from '../DeleteReservationModal';
import { useState } from 'react';
import EditReservationModal from '../EditReservationModal';


export default function ListingIndexItem({reservation}){
    const tempImg = placeholderImg
    const dispatch = useDispatch();

    

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
            {/* <Link to={`/listings/${listing.id}`} className="listItem">
                <div><img src={tempImg} alt='placeholder'className="item-img"/></div>
                <ul className='item-text'>
                    <li className='boldtext'>{listing.address}, {listing.city}</li>
                    <li>{listing.title}</li>
                    <li><span className='boldtext'>${listing.price}</span>  night</li>
                </ul>
            </Link> */}
            <div className='indexItem'>
                <div>{checkInDay} - {checkOutDay}</div>
                <div className='numg'>Number of Guests:{reservation.numOfGuests}</div>
                <div>Listing ID: {reservation.listingId}</div>
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
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
            </div>
        </>
    )

}