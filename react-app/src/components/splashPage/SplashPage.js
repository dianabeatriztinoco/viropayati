
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import { useSelector } from 'react-redux';
import './splashPage.css'

const splashImage = 'https://i.imgur.com/Cyy2hjR.jpg'


const SplashPage = () => {

    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) {
    return (
        <>
        <div className="splashImageDiv">
        <Link className = 'splashPageTxtLink' to='/homepage'><img src={splashImage} className="splashImage"></img></Link>
        </div>
        <div className='splashPageTxt'>
           <Link className ='splashPageTxtLink' to='/homepage'> be here now... </Link>
           
           <div> about viropayati</div>
           <div> </div>
           
        </div>
        </>
    )
    }
    else {
        return (
            <div>
               <div className="splashImageDiv">
        <Link className = 'splashPageTxtLink' to='/homepage'><img src={splashImage} className="splashImage"></img></Link>
        </div>
        <div className='splashPageTxt'>
           <Link className ='splashPageTxtLink' to='/homepage'> be here now... </Link>
        </div>
            </div>
        )
    }
}

export default SplashPage