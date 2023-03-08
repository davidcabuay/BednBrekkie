import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
// import SignupForm from '../SignupFormModal/SignupForm';
import LoginForm from './LoginForm';
import { hideModal } from '../../store/ui';
import "./LoginForm.css";


export default function LoginFormModal(props) {
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();



    return(
        <Modal onClose={() => dispatch(hideModal())}>
            <LoginForm />
        </Modal>
    )
    // return (
    //     <>
    //         <button className='logmodalbutton' onClick={()=> setShowModal(true)}>Log in required</button>
    //         {showModal && (
    //             <Modal onClose={()=> setShowModal(false)}>
    //                 <LoginForm loginModal={props.loginModal}
    //                 setLoginModal={props.setLoginModal}
    //                 setSignupModal={props.setSignupModal}/>
    //                 <SignupForm />
    //             </Modal>
    //         )}
    //     </>
    // );
}

