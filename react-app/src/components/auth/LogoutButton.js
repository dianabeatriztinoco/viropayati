import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { Link } from 'react-router-dom';
import './logoutButton.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (

  <Link to='/'>
  <button className='logout-button' onClick={onLogout}>Logout</button>
  </Link>

  )
};

export default LogoutButton;
