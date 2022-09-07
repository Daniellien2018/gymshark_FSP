import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
    //     .catch(async (res) => {
    //     let data;
    //     try {
    //       // .clone() essentially allows you to read the response body twice
    //       data = await res.clone().json();
    //     } catch {
    //       data = await res.text(); // Will hit this case if the server is down
    //     }
    //     if (data?.errors) setErrors(data.errors);
    //     else if (data) setErrors([data]);
    //     else setErrors([res.statusText]);
    //   });
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);

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

  return setErrors(['Please enter a valid username and email'])
 };

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="signUpForm">
        <h1>Create An Account</h1>
        <p>Sign up and you'll be able to manage your account, track orders, save products, and access easier returns</p>
        <ul>
          {/* {console.log({errors})} */}
          {errors.map(error => <li key={error}>{error.messsage}</li>)}
        </ul>
        <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default SignupFormPage;