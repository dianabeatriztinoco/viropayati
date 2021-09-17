
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import { useSelector } from 'react-redux';
import { createNewYogaTeacher } from '../../store/teacher';
import './splashPage.css'

const splashImage = 'https://i.imgur.com/Cyy2hjR.jpg'


const SplashPage = () => {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    dispatch(createNewYogaTeacher(sessionUser?.id))
  

    if (!sessionUser) {
    return (
        <>
        <div className="splashImageDiv">
        <Link className = 'splashPageTxtLink' to='/homepage'><img src={splashImage} className="splashImage"></img></Link>
        </div>
        <div className='splashPageTxt'>
           <Link className ='splashPageTxtLink' to='/homepage'> be here now... </Link>
           <div>
           <div> </div>
           </div>
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