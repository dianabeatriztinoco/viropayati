
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoLoginStudent from '../auth/DemoLoginStudent'
import DemoLoginTeacher from '../auth/DemoLoginTeacher';
import './navBar.css'
import { useSelector } from 'react-redux';
import viropayati_logo from '../../assets/viropayati_logo.png'
import CreateYogaClassForm from '../createYogaClass/CreateYogaClass';




const NavBar = ({setAuthenticated}) => {

  const sessionUser = useSelector(state => state.session.user)

  // const viropayatiLogo = 'https://i.imgur.com/a/LRtoMCZ.png'
  if(sessionUser && sessionUser.isTeacher === false) {

  return (
    <nav>
      <div className="navBarContainer">
        <div className='viropayatiLogo'>
          <NavLink to='/splash' exact={true} activeClassName='active'>
            <img src={viropayati_logo}></img>
          </NavLink>
        </div>
        {/* <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <div>
          <DemoLogin/>
        </div> */}
        <div className='logOutDiv'>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </nav>
  );
}

if(sessionUser && sessionUser.isTeacher === true) {

  return (
    <nav>
      <div className="navBarContainer">
        <div className='viropayatiLogo'>
          <NavLink to='/splash' exact={true} activeClassName='active'>
            <img src={viropayati_logo}></img>
          </NavLink>
        </div>
        {/* <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <div>
          <DemoLogin/>
        </div> */}
        <div className='logOutDiv'>
          <CreateYogaClassForm />
        </div>
        <div className='logOutDiv'>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </nav>
  );
}


else {

  return (
    <nav>
      <div className="navBarContainer">
        <div className='viropayatiLogo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={viropayati_logo}></img>
          </NavLink>
        </div>
        <div className="authContainer">
        <div>
          <NavLink className='loginDiv' to='/login' exact={true} activeClassName='active'>
            <button className='loginDiv-Button'>Login</button>
          </NavLink>
        </div>
        <div >
          <NavLink className='signupDiv' to='/sign-up' exact={true} activeClassName='active'>
           <button className='signupDiv-Button'> Sign Up </button>
          </NavLink>
        </div>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        <div className='demoDiv'>
        
          <DemoLoginStudent/>
          <DemoLoginTeacher/>
         
        </div>
        </div>
        {/* <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div> */}
      </div>
    </nav>
  );
}

}


export default NavBar;
