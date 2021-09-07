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
      history.push('/homePage')
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
          <div key={ind}>{error}</div>
        ))}
      </div>
   
      <div className="input">Login</div>
      <div className="input">
        <label htmlFor='email'></label>
        <input
          name='email'
          type='text'
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
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        </div>
        <div className="input">
        <button  type='submit'>Login</button>
        </div>
      </div>
     
    </form>
   
    <div className="borderDiv"></div>
    <div className="signUpOptionContainer">
    <div className="loginText">Don't have an account?</div>
    <div className="signUpModal">
    
      <SignUpFormModal /> 
    </div>
    <div className="loginText">Or</div>
    <div className="signUpModal">
    
      <DemoLoginStudent /> <DemoLoginTeacher />
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
