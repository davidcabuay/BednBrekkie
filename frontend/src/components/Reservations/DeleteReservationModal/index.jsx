import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../../store/reservation";

export default function DeleteReservationModal({reservationId, onCancel}){
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteReservation(reservationId));
        onCancel();
    }

    return(
        <div>
            <p>Are you sure you want to delete this reservation?</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}