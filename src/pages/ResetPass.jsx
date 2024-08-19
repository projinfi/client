import React, { useState } from 'react';
import '../pages/ResetPass.css';
import { useNavigate } from 'react-router-dom';
import signimg from '../assets/signupimg3.jpg';
import axios from 'axios';

const ResetPass = () => {

    const [email,setEmail] = useState({email:''})
    const [resMsg,setResMsg] = useState('')
    const [successMsg,setSuccessMsg] = useState('')

    const fieldChange = (e) => {
      const {name,value} = e.target;
      setEmail((prev)=>({...prev,[name]:value}))
    }

    const sendResetMail = () => {
        try {
          axios.post("https://server-orcin-delta.vercel.app/users/resetPassword",email,{
            headers : {
                'Content-Type' : 'application/json'
            }
          })
          setSuccessMsg(`reset email sent to ${email.email}`)
        } catch (err) {
            setResMsg('error in sending email')
            console.log('error sending reset mail', err)
          
        }
    }

    console.log(email)

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/')
    }

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
                              <input onChange={fieldChange} name='email' value={email.email} className='input-text-field' type='text' placeholder='enter registered email' />
                          </div>
                      </div>
                      <div className='signup-input-contentbox'>

                          <div onClick={sendResetMail} className='signup-btn'>
                              Send Reset Email
                          </div>
                          
                      </div>
                      <div className='error-status'>{resMsg}</div>
                      <div className='success-status'>{successMsg}</div>
                      <div className='dont-have-account'>Have an account <b onClick={goToSigninPage} className='signup-prompt'>SignIn</b></div>
                </div>
            </div>
            <div className='signup-right'>
                <img className='signup-img' src={signimg}/>
            </div>
        </div>
    </div>
  )
}

export default ResetPass