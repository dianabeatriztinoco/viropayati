import React from 'react';
import { useDispatch } from 'react-redux';
import { loginDemoTeacher } from '../../store/session';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './demoLogin.css'

const DemoLoginTeacher = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  
  const onDemoLogin = async (e) => {
    await dispatch(loginDemoTeacher());
    // history.push("/")
  };

  return (
    <Link to='/homepage'>
    <button onClick={onDemoLogin} className="demo-button" >
      Demo Teacher
    </button>
    </Link>
  );
};

export default DemoLoginTeacher;