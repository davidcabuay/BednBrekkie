import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import DropdownMenu from '../DropDown';
import HomeIcon from '@mui/icons-material/Home';


import './Navigation.css';

function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
    

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
                    <HomeIcon />
                </NavLink>
                <div className='sessionlink'>{sessionLinks}</div>
           
        </div>
    );
}

export default Navigation;