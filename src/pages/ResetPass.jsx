import React from 'react';
import '../pages/ResetPass.css';
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/signin')
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
                              <input className='input-text-field' type='text' placeholder='enter new password' />
                          </div>
                      </div>
                   

                    

                      <div className='signup-input-contentbox'>

                          <div className='signup-btn'>
                              Send Reset Email
                          </div>
                      </div>

                      <div className='dont-have-account'>Have an account <b onClick={goToSigninPage} className='signup-prompt'>SignIn</b></div>

                     

                </div>
            </div>
            <div className='signup-right'>
                <img className='signup-img' src='/src/assets/signupimg3.jpg'/>
            </div>

        </div>
    </div>
  )
}

export default ResetPass