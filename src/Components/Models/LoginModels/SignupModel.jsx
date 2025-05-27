import React, { useState } from 'react';
import { signup } from '../../../Apis/signup';
import { showToast } from '../../Toast';
import "../LoginModels/LoginModel.css";


const SignupModel = () => {

    const [signupFormData, setSignupFormData] = useState({ fullName: '', email: '', password: '', phoneNumber: '' });

    const handleSignupChange = (e) => {
        setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
    }

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signup(signupFormData);
            if (result.status === 200) {
                showToast("SignUp Successfull", "green");
            } else {
                showToast("Failed to SignUp", "red");
            }

        } catch (error) {
            console.log("Signup error:", error.message)
            showToast("Something went wrong while SignUp!", "red");
        }
    }

    return (
        <form className="input-content" onSubmit={handleSignupSubmit}>

            <input className="name" type="text" name='fullName' placeholder="Full Name" onChange={handleSignupChange} />

            <input className="email" type="email" name='email' placeholder="E-mail" onChange={handleSignupChange} />

            <input className="password" type="password" name="password" placeholder="Password" onChange={handleSignupChange} />

            <input className="number" type="number" name='phoneNumber' placeholder="Phone Number" onChange={handleSignupChange} />

            <button type='submit' className="login-btn signup-btn">Create Account</button>
        </form>
    )
}

export default SignupModel