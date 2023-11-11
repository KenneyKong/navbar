import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  async function handleLoginSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', formData);
      setMessage(response.data); // Set login success message
      setFormData({ email: '', password: '' }); // Clear input fields
    } catch (error) {
      console.log(error.response.data);
      setMessage('Invalid email or password'); // Set login failure message
    }
  }

  async function handleSignupSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/signup', formData);
      setMessage(response.data); // Set signup success message
      setFormData({ email: '', password: '' }); // Clear input fields
    } catch (error) {
      console.log(error.response.data);
      setMessage('Signup failed'); // Set signup failure message
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <div className='login--container'>
      <div className='login--box'>
        <form>
          <div className='login--email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='login--email--box'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='login--password'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='login--password--box'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {message && <p className='login--message'>{message}</p>}
          <div className='button--container'>
          <button className='login--button' onClick={handleLoginSubmit}>Login</button>
          <button className='signup--button' onClick={handleSignupSubmit}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
