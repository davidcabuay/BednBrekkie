import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../../store/reservation";
import './delete.css'

export default function DeleteReservationModal({reservationId, onCancel}){
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteReservation(reservationId));
        onCancel();
    }

    return(
        <div className="deletemodal">
            <p className="deletetext">Are you sure you want to delete this reservation?</p>
            <div className="dbuttons">
                <button className="cancelbutton" onClick={onCancel}>Cancel</button>
                <button className="deletebutton" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}