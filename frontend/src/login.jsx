// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let navigate = useNavigate()
    if (localStorage.getItem('access_token')) {
      return navigate('/')
    }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Add your login logic here
    console.log('Login button clicked');

    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try{
    const response = await axios({
      method: 'post',
      url: 'http://localhost:9001/api/token/',
      data: formData,
    })
    // console.log(response.data.access)
    localStorage.setItem('access_token', response.data.access)
    if (localStorage.getItem('access_token')) {
      return navigate('/')
    }
    }
    catch(error){
        return navigate('/login')
        // console.error("Login failed",error)
    }
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
