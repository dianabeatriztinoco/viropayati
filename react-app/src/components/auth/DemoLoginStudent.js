import React from 'react';
import { useDispatch } from 'react-redux';
import { loginDemoStudent } from '../../store/session';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './demoLogin.css'

const DemoLoginStudent = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const onDemoLogin = async (e) => {
    await dispatch(loginDemoStudent());
    // history.push("/homepage")
  };

  return (
    <Link to='/homepage'>
    <button onClick={onDemoLogin} className="demo-button" >
      Demo Student
    </button>
    </Link>
  );
};

export default DemoLoginStudent;