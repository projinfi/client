import React, { useState, useEffect } from 'react';
import '../pages/ResetPass.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios';

const ResetPass = () => {
    const [email, setEmail] = useState({ email: '' });
    const [resMsg, setResMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [isFieldsFilled, setFieldsFilled] = useState(false);

    const fieldChange = (e) => {
        const { name, value } = e.target;
        setEmail((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (email.email && validateEmail(email.email)) {
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [email]);

    const sendResetMail = async () => {
        try {
            const response = await axios.post(
                "https://server-orcin-delta.vercel.app/users/resetPassword",
                email,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setSuccessMsg(`Reset email sent to ${email.email}`);
        } catch (err) {
            setResMsg('Error in sending email');
            console.log('Error sending reset mail', err);
        }
    };

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/');
    };

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-left'>
                    <div className='signup-left-contents'>
                        <div className='register-title'>Reset Password</div>
                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Registered Email</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input
                                    onChange={fieldChange}
                                    name='email'
                                    value={email.email}
                                    className='input-text-field'
                                    type='text'
                                    placeholder='Enter registered email'
                                />
                            </div>
                        </div>
                        <div className='signup-input-contentbox'>
                            <div onClick={isFieldsFilled ? sendResetMail : null} className={`signup-btn ${isFieldsFilled ? "" : "btn-disabled"}`}>
                                Send Reset Email
                            </div>
                        </div>
                        <div className='error-status'>{resMsg}</div>
                        <div className='success-status'>{successMsg}</div>
                        <div className='dont-have-account'>
                            Have an account? <b onClick={goToSigninPage} className='signup-prompt'>Sign In</b>
                        </div>
                    </div>
                </div>
                <div className='signup-right'>
                    <img className='signup-img' src={signimg} alt="Sign Up" />
                </div>
            </div>
        </div>
    );
};

export default ResetPass;
