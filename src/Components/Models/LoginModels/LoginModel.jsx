import React, { useState } from 'react';
import SigninModel from './SigninModel';
import SignupModel from "./SignupModel";
import "../LoginModels/LoginModel.css";

const LoginModel = ({ onClose }) => {

    const [activeForm, setActiveForm] = useState('signin-content');


    return (
        <div className="models">
            <div className="accounts">
                <button className="btn" onClick={() => setActiveForm('signin-content')}>Log in</button>

                <button className="btn" onClick={() => setActiveForm('signup-content')}>Create Account</button>
            </div>

            <div>
                {activeForm === 'signin-content' && (
                    <div className="signin-content">
                        <div className="sign-model-sepration"></div>
                        <div className="sign-in-model-content">
                            <div className="sign-model-heading">
                                Log in to Tech Heim
                            </div>

                            <SigninModel onClose={onClose} />

                            <p className="forgot-password">Forgot Password ?</p>

                            <p>Or Log In with</p>

                            <div className="socials-btns">
                                <button className="google-btn">Google</button>
                                <button className="google-btn">Facebook</button>
                            </div>

                            <p className="have-account">Don’t have an account ? <span onClick={() => setActiveForm('signup-content')}>sign up</span></p>
                        </div>

                        <svg className="signin-cross" onClick={onClose} style={{ bottom: '585px' }} xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 384 512">
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>
                )}
            </div>

            <div>
                {activeForm === 'signup-content' && (
                    <div className="signup-content">
                        <div className="sign-model-sepration"></div>
                        <div className="sign-in-model-content">
                            <div className="sign-model-heading">
                                Create your account
                            </div>

                            <SignupModel />

                            <p>Or Sign Up with</p>

                            <div className="socials-btns">
                                <button className="google-btn">Google</button>
                                <button className="google-btn">Facebook</button>
                            </div>

                            <p className="have-account">Already have an account ? <span onClick={() => setActiveForm('signin-content')}>sign in</span></p>
                        </div>

                        <svg className="signin-cross signup-cross" onClick={onClose} style={{ bottom: '585px' }} xmlns="http://www.w3.org/2000/svg"
                            fill="currentcolor" viewBox="0 0 384 512">
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModel;