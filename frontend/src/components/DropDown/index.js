import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupForm from '../SignupFormModal/SignupForm';
import { login } from '../../store/session';
import { showSignupModal, showLoginModal } from '../../store/ui';
import './dropdown.css';


function DropdownMenu(){
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    // const [loginModal, setLoginModal] = useState(false);
    // const [signupModal, setSignupModal] = useState(false);

    useEffect(()=>{
        if(!isOpen) return;
        const closeMenu = () => {
            setIsOpen(false);
        }
        document.addEventListener('click', closeMenu);
    
        return () => document.removeEventListener('click', closeMenu)
    }, [isOpen])

    const handleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    // const clickLogin = () => {
    //     setIsOpen(!isOpen);
    //     setLoginModal(!loginModal)
    // }

    // const clickSignup = () => {
    //     setIsOpen(!isOpen);
    //     setSignupModal(!signupModal)
    // }

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(login({email: 'demo@user.io', password: 'password'}))
    }

    return (
        <>
            <div className='ddwrapper' > 
                {/* <MenuIcon className='menu' onClick={handleDropdown}/> */}
                <i class="fa-solid fa-bars fa-2x" style={{cursor:'pointer'}}onClick={handleDropdown}></i>
                {isOpen && (
                    <div className='dropdown-context'>
                        <ul className='profile-dropdown'>
                            <li className='dropdown-list' style={{fontWeight: "bold"}} onClick={() => dispatch(showSignupModal())}>Sign Up</li>
                            <li className='dropdown-list' onClick={() => dispatch(showLoginModal())}>Log In</li>
                            <li className='dropdown-list' onClick={demoLogin}>Demo</li>
                            {/* <li className='dropdown-list' style={{fontWeight: "bold"}} onClick={clickSignup}>Sign Up</li> */}
                            {/* <li className='dropdown-list' onClick={clickLogin}>Log In</li> */}
                            {/* <li className='dropdown-list' onClick={demoLogin}>Demo</li> */}

                        </ul>
                    </div>
                )}
            </div>
            {/* {loginModal && (
                <Modal onClose={()=> setLoginModal(false)}>
                    <LoginForm 
                    loginModal={loginModal}
                    setLoginModal={setLoginModal}
                    setSignupModal={setSignupModal}/>
                </Modal>
            )}

            {signupModal && (
                <Modal onClose={()=> setSignupModal(false)}>
                    <SignupForm 
                    signupModal={signupModal}
                    setLoginModal={setLoginModal}
                    setSignupModal={setSignupModal}/>
                </Modal>
            )} */}
        </>
    )
}

export default DropdownMenu