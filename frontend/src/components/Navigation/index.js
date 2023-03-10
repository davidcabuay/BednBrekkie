import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DropdownMenu from '../DropDown';

import SignupFormModal from '../SignupFormModal';


import './Navigation.css';


function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
    const modal = useSelector(state => state.ui.modal)
    

    let sessionLinks;
    if (sessionUser) {
    sessionLinks = (
        <ProfileButton user={sessionUser} />
    );
    } else {
    sessionLinks = (
        <>
            <DropdownMenu />
        </>
    );
    }

    return (
        <div className="navwrapper">
            
                <NavLink className = 'Homelink' exact to="/">
                    {/* <HomeIcon /> */}
                    <i class="fa-solid fa-bed fa-2x"></i>
                </NavLink>
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Future Feature"
                        className="search-input"
                    />
                    <button className='searchbutton'>Search</button>
                </div>
                <div className='sessionlink'>{sessionLinks}</div>
                {modal === 'login' && <LoginFormModal/>}
                {modal === 'signup' && <SignupFormModal/>}
        </div>
    );
}

export default Navigation;