import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../store/review";
import './delete.css'

export default function DeleteReviewModal({review, onCancel}){
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteReview(review.id));
        onCancel();
    }

    return(
        <div className="deletemodal">
            <p className="deletetext">Are you sure you want to delete this review?</p>
            <div className="dbuttons">
                <button className="deletebutton" onClick={handleDelete}>Delete</button>
                <button className="cancelbutton" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}