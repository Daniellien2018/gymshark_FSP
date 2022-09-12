import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { NavLink } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const handleDemoSubmit = e => {
    // e.preventDefault();
    return dispatch(sessionActions.login({username: "demo-lition", email: "demo@user.io", password: "password"}))
    console.log('hi')
    // return dispatch(sessionActions.login({username: "demo-man", email: "demo@user.io", password: "password"}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='loginForm'>
        <h1>Log Into My Gymshark</h1>
        <ul className='errors'>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>Username or Email:</label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id='login' type="submit">LOG IN</button>
        {/* <div > */}
          <button id='demo-login' type="submit" onClick={handleDemoSubmit}>DEMO LOGIN</button>
        {/* </div> */}
        <NavLink id='signup' to="/signup">Create An Account</NavLink>
      </div>
    </form>
  );
}

export default LoginFormPage;