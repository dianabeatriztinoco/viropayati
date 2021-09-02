import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="signUpForm">
    <div className="input">SIGN-UP</div>
    <form  onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="input">
        {/* <label>User Name</label> */}
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          placeholder="username"
          value={username}
        ></input>
      </div>
      <div className="input">
        {/* <label>Email</label> */}
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          placeholder="email"
          value={email}
        ></input>
      </div>
      <div className="input">
        {/* <label>Password</label> */}
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          placeholder="password"
          value={password}
        ></input>
      </div>
      <div className="input">
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          placeholder="repeat password"
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className="input">
      <button  type='submit'>Sign Up</button>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;
