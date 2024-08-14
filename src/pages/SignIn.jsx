import React, { useState } from 'react';
import '../pages/SignIn.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';


const SignIn = () => {

  
    const navigate = useNavigate();

    const goToSignupPage = () => {
        navigate('/signup');
    }

    const ResetPassword = () => {
        navigate('/resetpassword');
    }


    return (
        <div className='signup-page'>
            <div className='signup-container'>

                <div className='signup-left'>
                    <div className='signup-left-contents'>

                        <div className='register-title'>Login To Learn</div>



                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Email address</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input className='input-text-field' type='text' placeholder='Email address' />
                            </div>
                        </div>

                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Password</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input className='input-text-field' type='text' placeholder='password' />
                            </div>
                        </div>

                        <div className='verify-label'>
                            <input className='checkbox' id='verify-box' type='checkbox' />
                            <label className='label-text' for="verify-box">I agree to the terms & policy</label>
                        </div>

                        <div className='signup-input-contentbox'>

                            <div className='signup-btn'>
                                SignIn
                            </div>
                        </div>

                        <div className='dont-have-account'>Don't have account <b onClick={goToSignupPage} className='signup-prompt'>Signup</b> | <b onClick={ResetPassword} className='signup-prompt'>Reset Password</b></div>
                        
                    </div>
                </div>
                <div className='signup-right'>
                    <img className='signup-img' src={signimg} />
                </div>

            </div>
        </div>
    )
}

export default SignIn