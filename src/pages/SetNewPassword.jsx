import React from 'react';
import '../pages/SetNewPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SetNewPassword = async() => {

    const navigate = useNavigate();

    const goToSignupPage = () => {
        navigate('/signup');
    }

    const ResetPassword = () => {
        navigate('/resetpassword');
    }

    const query = useQuery();
    const token = query.get('token')

    console.log(token)

   try{
    const isTokenValid = await axios.post('https://server-orcin-delta.vercel.app/users/verifyResetToken', token, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
   }catch(err){
    console.log('invalid token',err)
    goToSignupPage()
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