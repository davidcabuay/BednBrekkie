import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteReviewModal from "./DeleteReviewModal/DeleteReviewModal";
import EditReviewModal from "./EditReviewModal/EditReviewModal";


export default function ReviewIndexItem({review}){
    // const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
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



    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    let rawdate;  
    if (review.createdAt){
        rawdate = review.createdAt
        }else{
            rawdate= new Date();
        }
    let date = rawdate.toLocaleDateString("en-US", options)
    // const avg = ((review.cleanliness+ review.communication + review.checkIn + review.accuracy + review.location+ review.value)/6)
    // const rating = Math.round(avg *10)/10


        let editContainer;
        if (sessionUser){
            if (sessionUser.id === review.authorId){
                editContainer =
                <div>
                    <button className="editdeletebutton" onClick={handleDeleteClick}>Delete</button>
                    <button className="editdeletebutton" onClick={handleEditClick}>Edit</button>
                </div>
        }}else{
            editContainer = <></>
        }


    return(
        
            <div className="indexitemcontainer">
                <div>
                    <div className="author">{review.author}</div>   
                    <div className="createdAt">{date}</div>  
                    <div className='body'>{review.body}</div>
                </div>
                <div>
                    {editContainer}
                </div>
                {deleteModal && (
                    <Modal onClose={() => setDeleteModal(false)}>
                        <DeleteReviewModal
                            review = {review}
                            onCancel={handleCancelDelete}/>
                    </Modal>
                )}
                {editModal && (
                    <Modal onClose={() => setEditModal(false)}>
                    <EditReviewModal
                        review = {review}
                        onCancel={handleCancelEdit}/>
                </Modal>
                )}
            </div>
        
    )
}
