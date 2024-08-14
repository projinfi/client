import React from 'react';
import '../pages/SetNewPassword.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';

const SetNewPassword = () => {

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

                        <div className='register-title'>Change Password</div>



                     

                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Password</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input className='input-text-field' type='text' placeholder='password' />
                            </div>
                        </div>
                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Confirm Password</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input className='input-text-field' type='text' placeholder='password' />
                            </div>
                        </div>

                     

                        <div className='signup-input-contentbox'>

                            <div className='signup-btn'>
                                Change Password
                            </div>
                        </div>

                        <div className='dont-have-account'>Don't have account <b onClick={goToSignupPage} className='signup-prompt'>Signup</b> </div>
                        
                    </div>
                </div>
                <div className='signup-right'>
                    <img className='signup-img' src={signimg} />
                </div>

            </div>
        </div>
    )
}

export default SetNewPassword