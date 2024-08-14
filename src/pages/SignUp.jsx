import React, { useState } from 'react';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios'

const SignUp = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onFieldChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/');
    };

    const submitForm = async() => {
        try{
         const response =  await axios.post('https://server-orcin-delta.vercel.app/users/signUp',userData,{
            headers : {
                'Content-Type' : 'application/json'
            }
           })
           console.log('success',response)
        }catch(error){
            console.log('error in signup',error)
        }
    }

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-left'>
                    <div className='signup-left-contents'>
                        <div className='register-title'>Register To Learn</div>

                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Name</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input
                                    name='name'
                                    value={userData.name}
                                    onChange={onFieldChange}
                                    className='input-text-field'
                                    type='text'
                                    placeholder='Enter Name'
                                />
                            </div>
                        </div>
                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Email address</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input
                                    name='email'
                                    value={userData.email}
                                    onChange={onFieldChange}
                                    className='input-text-field'
                                    type='text'
                                    placeholder='Email address'
                                />
                            </div>
                        </div>
                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Password</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input
                                    name='password'
                                    value={userData.password}
                                    onChange={onFieldChange}
                                    className='input-text-field'
                                    type='text'
                                    placeholder='Create a strong password'
                                />
                            </div>
                        </div>

                        <div className='verify-label'>
                            <input className='checkbox' id='verify-box' type='checkbox' />
                            <label className='label-text' htmlFor='verify-box'>I agree to the terms & policy</label>
                        </div>

                        <div className='signup-input-contentbox'>
                            <div onClick={submitForm} className='signup-btn'>
                                Signup
                            </div>
                        </div>

                        <div className='dont-have-account'>
                            Have an account <b onClick={goToSigninPage} className='signup-prompt'>SignIn</b>
                        </div>
                    </div>
                </div>
                <div className='signup-right'>
                    <img className='signup-img' src={signimg} alt='Sign Up' />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
