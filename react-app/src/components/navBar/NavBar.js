
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoLogin from '../auth/DemoLogin'
import './navBar.css'
import { useSelector } from 'react-redux';


const NavBar = ({setAuthenticated}) => {

  const sessionUser = useSelector(state => state.session.user)

  if(sessionUser){

  return (
    <nav>
      <div className="navBarContainer">
        <div>
          <NavLink to='/splash' exact={true} activeClassName='active'>
            <img src='viropayati_logo.png'></img>
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
        <div>
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
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src='viropayati_logo.png'></img>
          </NavLink>
        </div>
        <div className="authContainer">
        <div>
          <NavLink className='loginDiv' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div >
          <NavLink className='signupDiv' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        <div className='demoDiv'>
          <DemoLogin/>
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
