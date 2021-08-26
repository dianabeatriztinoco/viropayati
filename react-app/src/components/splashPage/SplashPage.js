
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './splashPage.css'
import HomePage from '../homePage/HomePage';

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
        </div>
        </>
    )
    }
    else {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
}

export default SplashPage