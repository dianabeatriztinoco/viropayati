
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoLoginStudent from '../auth/DemoLoginStudent'
import DemoLoginTeacher from '../auth/DemoLoginTeacher';
import './navBar.css'
import { useSelector } from 'react-redux';
import viropayati_logo from '../../assets/viropayati_logo.png'
import CreateYogaClassForm from '../createYogaClass/CreateYogaClass';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import YogaClassFromModal from '../CreateClassModal';




const NavBar = ({setAuthenticated}) => {

  const sessionUser = useSelector(state => state.session.user)

  // const viropayatiLogo = 'https://i.imgur.com/a/LRtoMCZ.png'
  // if(sessionUser && sessionUser.isTeacher === false) {

  // return (
  //   <nav>
  //     <div className="navBarContainer">
  //       <div className='viropayatiLogo'>
  //         <Link to='/' exact={true} activeClassName='active'>
  //           <img src={viropayati_logo}></img>
  //         </Link>
  //       </div>
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
//         <div className='logOutDiv'>
//           <LogoutButton setAuthenticated={setAuthenticated} />
//         </div>
//       </div>
//     </nav>
//   );
// }

if(sessionUser && sessionUser.isTeacher === true) {

  return (
    <nav>
      <div className="navBarContainerWithLogo">
        <div className='viropayatiLogo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className="logo" src={viropayati_logo}></img>
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
       <div className="navBarContainer">
        
        <div className="createClassModal">
          <YogaClassFromModal />
          {/* <CreateYogaClassForm /> */}
          </div>
        </div>
        <div className="viewAllClasses"> 
        <Link to='/yogaClasses'>
  <button className='viewAllClassesButton' >View All Classes</button>
  </Link>

        </div>
       
        <div className='logOutDiv'>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
      
    </nav>
  );
}
if(sessionUser && sessionUser.isTeacher === false) {

  return (
    <nav>
       <div className="navBarContainerWithLogo">
     
        <div className='viropayatiLogo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className="logo" src={viropayati_logo}></img>
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
        
        </div>
        <div className="navBarContainer">
        <div className="viewAllClasses"> 
        
        <Link to='/yogaClasses'>
  <button className='viewAllClassesButton' >View All Classes</button>
  </Link>

        </div>
       
        <div className='logOutDiv'>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
      </div>
    </nav>
  );
}


else {

  return (
    <nav>
      <div className="navBarContainerWithLogo">
      
        <div className='viropayatiLogo'>
          <Link to='/' exact={true} activeClassName='active'>
            <img className="logo" src={viropayati_logo}></img>
          </Link>
        </div>
        <div className="navBarContainer">
        <div className="authContainer">
        <div>
          <LoginFormModal />
          {/* <NavLink className='loginDiv' to='/login' exact={true} activeClassName='active'>
            <button className='loginDiv-Button'>Login</button>
          </NavLink> */}
        </div>
        <div >
          <SignUpFormModal />
          {/* <NavLink className='signupDiv' to='/sign-up' exact={true} activeClassName='active'>
           <button className='signupDiv-Button'> Sign Up </button>
          </NavLink> */}
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
    </div>
    </nav>
  );
}

}


export default NavBar;
