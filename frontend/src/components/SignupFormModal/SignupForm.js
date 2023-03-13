
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { showLoginModal } from "../../store/ui";
import './SignupFormPage.css';


function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    // const [loginModal, setLoginModal] = useState(false);
    // const [signupModal, setSignupModal] = useState(true);
    // const setLoginModal = props.setLoginModal;
    // const setSignupModal = props.setSignupModal;
    
    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, email, password }))
            .catch(async (res) => {
            let data;
            try {
            // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
            data = await res.text(); // Will hit this case if the server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };
    
    // const clickLogin = () => {
    //     setSignupModal(false)
    //     setLoginModal(true)
    // }

    return (
        <>
        <form className='signupwrapper'onSubmit={handleSubmit}>
            <div>
                <div >Sign Up</div> 
                <div className="welcome" >Welcome to BednBrekkie</div>
            </div>
            <div className="input-boxes">
                <label>
                    <input
                    className='nameinput'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    // placeholder="email"
                    />
                    <span className='floating-label11'>name</span>
                </label>
                <label>
                    <input
                    className='signupinput'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    // placeholder="email"
                    />
                    <span className='floating-label1'>email</span>
                </label>
                <label>
                    <input
                    className='signuppassword'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    // placeholder="password"
                    />
                    <span className='floating-label2'>password</span>
                </label>
                <label>
                    <input
                    className='confpassword'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    // placeholder="confirm password"
                    />
                    <span className='floating-label3'>confirm password</span>
                </label>
            </div>
            <div className="buttondiv">
                <button className="signupbutton" type="submit">Sign Up</button>
                <p onClick={()=> dispatch(showLoginModal())}>Already have an account? Click here to log in.</p>
            </div>
        </form>
            <ul className="error-list-sign">
                {errors.map(error => <li className='errors' key={error}>{error}</li>)}
            </ul>
        </>
);
}

export default SignupForm;