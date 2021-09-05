import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [isTeacher, setIsTeacher] = useState(false)
  const [fullname, setFullName] = useState('')
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    
    if (password === repeatPassword) {
      
      const data = await dispatch(signUp(isTeacher, fullname, username, email, password));

    if (data) {

        setErrors(data)
        
      }
    }
      else {
        console.log(true)
       setErrors(['Passwords do not match!'])
      }
    
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  };
  const updateIsTeacher = (e) => {
    setIsTeacher(true);
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
        <label>Are you a Teacher?</label>
        <input
          type='checkbox'
          name='teacher'
          onChange={updateIsTeacher}
          checked={isTeacher}
         
        ></input>
        </div>
        <div className="input">
        <input
          type='text'
          name='fullname'
          onChange={updateFullName}
          placeholder="fullname"
          value={fullname}
          required={true}
        ></input>
        </div>
      
      <div className="input">
        {/* <label>User Name</label> */}
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          placeholder="username"
          value={username}
          required={true}
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
          required={true}
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
          required={true}
        ></input>
      </div>
      <div className="input">
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          placeholder="confirm password"
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
