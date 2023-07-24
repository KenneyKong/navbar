import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Import your custom CSS file for Login component

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', formData);
      console.log(response.data);
      // Assuming the server returns a successful response, you can add any additional logic here
    } catch (error) {
      console.log(error.response.data);
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
        <form onSubmit={handleSubmit}>
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
          <button className='login--button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
