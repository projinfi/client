import React, { useEffect, useState } from 'react';
import '../pages/SignIn.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios';

const SignIn = () => {
    const[isLoading,setIsLoading] = useState(false)
    const [resMsg,setResMsg] = useState('')
    const [successMsg,setSuccessMsg] = useState('')
    const [isFieldsFilled,setFieldsFilled] = useState(false)
    const [isCheckboxChecked,setCheckboxChecked] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
    }

    const onCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked)
        console.log(isCheckboxChecked)
    }

    useEffect(()=>{
        if(userData.email && userData.password && validateEmail(userData.email) && userData.password.length >= 6 && isCheckboxChecked){
             setFieldsFilled(true)
        }else{
            setFieldsFilled(false)
        }
    },[userData,isCheckboxChecked])

    const onDataChange = (e) => {
       
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const userSignIn = async () => {
        try {
            setIsLoading(true)
            const res = await axios.post('https://server-orcin-delta.vercel.app/users/logIn', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(false)
            if(res.data && res.data.name){
                console.log('success', res);
                localStorage.setItem('userToken',res.data.usertoken)
                setSuccessMsg(`welcome ${res.data.name}`)
                navigate('/')
            }else{
                setResMsg('invalid credentials')
            }
          
        } catch (err) {
            setIsLoading(false)
            setResMsg('invalid credentials')
            console.log('client err in signin', err);
        }
    };

    console.log(userData);

    const navigate = useNavigate();

    const goToSignupPage = () => {
        navigate('/signup');
    };

    const ResetPassword = () => {
        navigate('/resetpassword');
    };

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
                                <input onChange={onDataChange} value={userData.email} name='email' className='input-text-field' type='text' placeholder='Email address' />
                            </div>
                        </div>

                        <div className='signup-input-contentbox'>
                            <div className='signup-name-sec'>
                                <div className='signup-name'>Password</div>
                            </div>
                            <div className='signup-inputfield-sec'>
                                <input onChange={onDataChange} value={userData.password} name='password' className='input-text-field' type='password' placeholder='Password' />
                            </div>
                        </div>

                        <div className='verify-label'>
                            <input className='checkbox' id='verify-box' onChange={onCheckboxChange}  checked={isCheckboxChecked} type='checkbox' />
                            <label className='label-text' htmlFor="verify-box">I agree to the terms & policy</label>
                        </div>

                        {isLoading ? ( <div className='loader-space'><span class="loader"></span></div> ):(   <div className='signup-input-contentbox'>
                            <div onClick={isFieldsFilled ? userSignIn : null} className={`signup-btn ${isFieldsFilled ? "" :"btn-disabled"}`}>
                                Sign In
                            </div>
                        </div>)}

                      {successMsg ? ( <div className='success-status'>{successMsg}</div>):( <div className='error-status'>{resMsg}</div>)}
                       
                        <div className='dont-have-account'>
                            Don't have account <b onClick={goToSignupPage} className='signup-prompt'>Sign Up</b> | <b onClick={ResetPassword} className='signup-prompt'>Reset Password</b>
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

export default SignIn;
