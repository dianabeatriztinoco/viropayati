import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllTeachers } from "../../store/teacher";
import LoginFormModal from '../LoginFormModal'

import './homePage.css'
import { createNewYogaClass } from '../../store/yogaClass';

const splashImage = 'https://i.imgur.com/Cyy2hjR.jpg'


const HomePage = () => {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

  
    useEffect(() => {
        dispatch(getAllTeachers());
      }, []);

 if(sessionUser){   



 return (
     <>
     <div className='homePageButtonContainer'>
        <div className="availableClassesDiv">
             <div className="classText">Available Classes 
            <Link className="availableClassesLink" to='/yogaClasses'>
              
                    <img className='availableClassesButton'src="https://cdn.beyogi.com/wp-content/uploads/2019/12/Feat-Images-Hanna-750x400-9.png"/>
            </Link>
            </div>
        </div>
        <div className="teacherReviewsDiv">
        <div className="classText">Teacher Reviews 
            <Link className="teacherReviewsLink" to='/reviews'>
                <img className='teacherReviewsButton' src='https://cdn.beyogi.com/wp-content/uploads/2021/08/Feat-Images-Hanna-750x400-11.png'/>
            </Link>
            </div>
        </div>
        </div>
     </>
 )

} else {
    return (
        <>
        <div className='homePageButtonContainer'>
           <div className="availableClassesDiv">
                <div className="classText">Available Classes 
               <Link className="availableClassesLink" to='/login'>
                 
                       <img className='availableClassesButton'src="https://cdn.beyogi.com/wp-content/uploads/2019/12/Feat-Images-Hanna-750x400-9.png"/>
               </Link>
               </div>
           </div>
           <div className="teacherReviewsDiv">
           <div className="classText">Teacher Reviews 
               <Link className="teacherReviewsLink" to='/reviews'>
                   <img className='teacherReviewsButton' src='https://cdn.beyogi.com/wp-content/uploads/2021/08/Feat-Images-Hanna-750x400-11.png'/>
               </Link>
               </div>
           </div>
           </div>
        </>
    )
}
}
export default HomePage