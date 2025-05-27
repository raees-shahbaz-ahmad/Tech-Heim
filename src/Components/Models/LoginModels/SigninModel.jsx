import React, { useState } from 'react';
import { signin } from '../../../Apis/signin';
import { showToast } from '../../Toast';
import Cookies from 'js-cookie';

const Signinmodel = ({ onClose }) => {

    const [signinFormData, setSigninFormData] = useState({ email: '', password: '' });

    const handleSigninChange = (e) => {
        setSigninFormData({ ...signinFormData, [e.target.name]: e.target.value });
    }

    const handleSigninSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signin(signinFormData);
            console.log("Signin successful:", result);
            if (result.status === 200) {
                Cookies.set("token", result.data, { expires: 7 });
                onClose();
                showToast("Login Successfull", "green");
            } else{
                showToast("Failed to Login", "red");
            }

        } catch (error) {
            console.log("Signin error:", error.message);
            showToast("Something went wrong while Login!", "red");
        }
    }

    return (
        <form className="input-content" onSubmit={handleSigninSubmit} >

            <input className="signin-email" type="text" name='email' placeholder="E-mail" onChange={handleSigninChange} />

            <input className="signin-password" type="password" name="password" placeholder="Password" onChange={handleSigninChange} />

            <button type='submit' className="login-btn">Log In</button>
        </form>
    )
}

export default Signinmodel;