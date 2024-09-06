import React, { useState ,useEffect} from 'react';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios'

const SignUp = () => {

    const [isLoading,setIsLoading] = useState(false)
    const [resMsg,setResMsg] = useState('')
    const [successMsg,setSuccessMsg] = useState('')
    const [isFieldsFilled,setFieldsFilled] = useState(false)
    const [isCheckboxChecked,setCheckboxChecked] = useState(false)
    
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
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

    const onFieldChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/');
    };

    const submitForm = async () => {
        setSuccessMsg('')
        setResMsg('')
        try {
            setIsLoading(true)
            const response = await axios.post('https://server-orcin-delta.vercel.app/users/signUp', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.data.name && response.data){
                setSuccessMsg('registered successfully')
                localStorage.setItem('userToken',response.data.usertoken)
                setIsLoading(false)
                console.log('success', response)
            }else{
                setResMsg('user already exists :(')
            }
           
        } catch (error) {
            setIsLoading(false)
            setResMsg('user already exists :(')
            console.log('error in signup', error)
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
                            <input className='checkbox' id='verify-box' type='checkbox' onChange={onCheckboxChange} checked={isCheckboxChecked}/>
                            <label className='label-text' htmlFor='verify-box'>I agree to the terms & policy</label>
                        </div>

                      

                        {isLoading ? ( <div className='loader-space'><span class="loader"></span></div> ):(  <div className='signup-input-contentbox'>
                            <div onClick={submitForm} className={`signup-btn ${isFieldsFilled ? "" : "btn-disabled"}`}>
                                Signup
                            </div>
                        </div>)}

                    
                     
                        {successMsg ? ( <div className='success-status'>{successMsg}</div>):( <div className='error-status'>{resMsg}</div>)}

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
