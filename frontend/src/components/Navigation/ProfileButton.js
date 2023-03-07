import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Navigation.css'
import { useHistory } from 'react-router-dom';

export default function ProfileButton({user}){
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu= () => {
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(()=>{
        if(!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        }
        document.addEventListener('click', closeMenu);
    
        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    const reservationPage = (e) => {
        e.preventDefault();
        history.push('/reservations')
    }

    return(
        <>
            <AccountCircleRoundedIcon className='profileicon' onClick={openMenu}/>
                {/* <i className = "fa-solid fa-user-circle" />
            </AccountCircleRoundedIcon> */}
            {showMenu && (
                <div className='dropdown-context'>
                <ul className = "profile-dropdown">
                    <li className='dropdown-list' onClick={reservationPage}>{user.email}</li>
                    <li className='dropdown-list' onClick={logout}>Log Out</li>
                </ul>
                </div>
            )}      
        </>
    );
}