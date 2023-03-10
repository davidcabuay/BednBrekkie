import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import "./LoginForm.css";
import { showSignupModal } from '../../store/ui';

export default function LoginForm(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [errors, setErrors] = useState([]);
    // const setLoginModal = props.setLoginModal;
    // const setSignupModal = props.setSignupModal;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email, password}))
        .catch(async (res) => {
            let data;
            try{
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
            });
    };

    // const changeForm=() => {
    //     setLoginModal(false)
    //     setSignupModal(true)
    // }
    
    return (
        <>
            <form className='loginwrapper' onSubmit={handleSubmit}>
                <div>
                    <div>Log In</div>
                    <div className='welcome' >Welcome to BednBrekkie</div>
                </div>
                <div className='input-boxesL'>
                    <label className="loginlabel"> 
                        <input
                        className="logininput"
                        type="text"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        // placeholder='email'
                        />
                        <span className='floating-label4'>email</span>
                    </label>
                    <label className="loginlabel"> 
                        <input
                        className="loginpassword"
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                        // placeholder='password'
                        />
                        <span className='floating-label5'>password</span>
                    </label>
                </div>
                <div className='buttondiv'>
                    <button className="loginbuttonform" type = "submit">Log In</button>
                    <p onClick={()=> dispatch(showSignupModal())}>New to BednBrekkie? Click here to sign up.</p>
                </div>           
            </form>
                <ul className="error-list">
                    {errors.map(error => <li className='errors'  key={error}>{error}</li>)}
                </ul>
        </>
    )
};
    
