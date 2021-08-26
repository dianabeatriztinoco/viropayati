import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './homePage.css'

const splashImage = 'https://i.imgur.com/Cyy2hjR.jpg'


const HomePage = () => {
 return (
     <>
     <div className='homePageButtonContainer'>
        <div className="availableClassesDiv">
            <Link className="availableClassesLink" to='/yogaClasses'>
                <button className='availableClassesButton'>Available Classes</button>
            </Link>
        </div>
        <div className="teacherReviewsDiv">
            <Link className="teacherReviewsLink" to='/teacherReviews'>
                <button className='teacherReviewsButton'>Teacher Reviews</button>
            </Link>
        </div>
        </div>
     </>
 )

}

export default HomePage