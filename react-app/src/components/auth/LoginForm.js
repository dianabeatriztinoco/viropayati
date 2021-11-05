import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignUpFormModal from '../../components/SignUpFormModal'
import { login } from '../../store/session';
import DemoLoginStudent from './DemoLoginStudent';
import DemoLoginTeacher from './DemoLoginTeacher';
import { useHistory } from "react-router-dom";
import './loginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    history.push('/homePage')
    if (data) {
      setErrors(data);
      history.push('/')
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="loginForm">
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <ul>
          <li key={ind}>{error}</li>
          </ul>
        ))}
      </div>
   
      <div className="input">Login</div>
      <div className="input">
        <label htmlFor='email'></label>
        <input
          name='email'
          type='text'
          className="inputEmail"
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
      <div className="input">
        <input
          name='password'
          type='password'
          className="inputPassword"
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        </div>
        <div className="input">
        <button className="loginButton" type='submit'>Login</button>
        </div>
      </div>
     
    </form>
   
    <div className="borderDiv"></div>
    <div className="signUpOptionContainer">
    <div className="loginText">Don't have an account?</div>
    <div className="signUpModal">
    
      <SignUpFormModal /> 
    </div>
    <div className="loginText">or...</div>
    <div className="signUpModal">
    
        <div className="demoButtons">
      <DemoLoginStudent />
      </div>
      <div className="demoButtons">
       <DemoLoginTeacher />
       </div>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
