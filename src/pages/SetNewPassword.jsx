import React, { useState, useEffect } from 'react';
import '../pages/SetNewPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SetNewPassword = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const token = query.get('token');
    const [isTokenValid, setIsTokenValid] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [validPassword,setValidPassword] = useState(false)

    useEffect(() => {
        if (newPassword.length >= 6 && confirmPassword.length >= 6 && newPassword === confirmPassword) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }, [newPassword,confirmPassword]);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axios.post('https://server-orcin-delta.vercel.app/users/verifyResetToken', { token }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setIsTokenValid(true);
            } catch (err) {
                console.log('Error verifying token', err);
                setError('Invalid token');
                setIsTokenValid(false);
                navigate('/signup');
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, [token, navigate]);

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await axios.post('https://server-orcin-delta.vercel.app/users/updatePassword', { token, newPassword }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate('/');
        } catch (err) {
            console.log('Error resetting password', err);
            setError('Failed to reset password');
        }
    };

    const goToSignupPage = () => {
        navigate('/signup');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-left'>
                    <div className='signup-left-contents'>
                        <div className='register-title'>Change Password</div>

                        {error && <div className="error-message">{error}</div>}

                        {isTokenValid && (
                            <>
                                <div className='signup-input-contentbox'>
                                    <div className='signup-name-sec'>
                                        <div className='signup-name'>Password</div>
                                    </div>
                                    <div className='signup-inputfield-sec'>
                                        <input
                                            className='input-text-field'
                                            type='password'
                                            placeholder='Password'
                                            value={newPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                                <div className='signup-input-contentbox'>
                                    <div className='signup-name-sec'>
                                        <div className='signup-name'>Confirm Password</div>
                                    </div>
                                    <div className='signup-inputfield-sec'>
                                        <input
                                            className='input-text-field'
                                            type='password'
                                            placeholder='Confirm Password'
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    </div>
                                </div>

                                <div className='signup-input-contentbox'>
                                    <div className={`signup-btn ${validPassword ? "" : "btn-disabled"}`} onClick={handleChangePassword}>
                                        Change Password
                                    </div>
                                </div>
                            </>
                        )}

                        <div className='dont-have-account'>Don't have an account? <b onClick={goToSignupPage} className='signup-prompt'>Signup</b></div>
                    </div>
                </div>
                <div className='signup-right'>
                    <img className='signup-img' src={signimg} alt='Signup' />
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
