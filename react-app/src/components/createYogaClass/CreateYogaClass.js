import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { Link } from 'react-router-dom';
import './createYogaClassForm.css'

const CreateYogaClassForm = () => {


  return (

  <Link to='/newClass'>
  <button className='logout-button'>Create Yoga Class</button>;
  </Link>

  )
};

export default CreateYogaClassForm;
