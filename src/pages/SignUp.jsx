import React from 'react';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const goToSigninPage = () => {
        navigate('/signin')
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
                              <input className='input-text-field' type='text' placeholder='Enter Name' />
                          </div>
                      </div>

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
                              <input className='input-text-field' type='text' placeholder='Create a strong password' />
                          </div>
                      </div>

                      <div className='verify-label'>
                          <input className='checkbox' id='verify-box' type='checkbox' />
                          <label className='label-text' for="verify-box">I agree to the terms & policy</label>
                      </div>

                      <div className='signup-input-contentbox'>

                          <div className='signup-btn'>
                              Signup
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

export default SignUp