import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupForm';
import { hideModal } from '../../store/ui';
import { useDispatch } from 'react-redux';

export default function SignupFormModal() {
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();


    return (
        <Modal onClose={() => dispatch(hideModal())}>
            <SignupFormPage />
        </Modal>
    )
    // return (
    //     <>
    //         <button onClick={()=> setShowModal(true)}>Sign Up</button>
    //         {showModal && (
    //             <Modal onClose={()=> setShowModal(false)}>
    //                 <SignupFormPage />
    //             </Modal>
    //         )}
    //     </>
    // );
}

