import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllClasses } from '../../store/yogaClass';
import { getAllTeachers } from '../../store/teacher';
import { getAllUsers } from '../../store/user';
import { Link } from 'react-router-dom';

import './yogaClasses.css'

const YogaClasses = () => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const yogaClasses = useSelector(state => state.yogaClasses.classes)
    const allUsers = useSelector(state => state.users.users)
    const teachers = useSelector(state => state.teachers.teachers)
    
  

    useEffect(()=>{
        dispatch(getAllClasses())
        dispatch(getAllTeachers())
        dispatch(getAllUsers())
    }, [])

   
   

    return (
        <>
        <div className='yogaClassContainer'>
        <div className="discover">Discover your practice...</div> 
            <div className="yogaClassDisplay" >
                
                {yogaClasses?.yoga_classes.map((yogaClass)=>(
                    <div className="classContainer" key={yogaClass.id}>
                    
                    <Link to={`/yogaClasses/${yogaClass.id}`}>
                    <img className='yogaClassImage' src={yogaClass.pic} />
                    </Link>
                    <div className="style">{yogaClass.title}</div>
                  
                    {/* <div className= 'address'>{yogaClass.address} </div> */}
                    <div className= 'address'>{yogaClass.city}, {yogaClass.state} </div>

                 
                    {/* {yogaClass.city} */}
                    {/* {yogaClass.state} */}
                    {/* {yogaClass.postal_code} */}
                    {/* {yogaClass.price} */}
                    {/* {yogaClass.description} */}
                    {/* {yogaClass.title} */}

                   {teachers?.teachers.map((teacher)=> (
                       <React.Fragment key={teacher.id}>
                       {allUsers?.users.map((user)=>(
                           
                   yogaClass.teacher_id === teacher.id && teacher.userId === user.id ?  (
                    <React.Fragment key={user.id}>
                       <div className="date">{yogaClass.classDate}</div>
                       <div className="teacher">taught by {user.fullname}</div>
                       <div className="price">${yogaClass.price}.00</div>
                       <Link to={`/yogaClasses/${yogaClass.id}`}>
                       {/* <div className="buttonContainer"> */}
                       {/* <button className="bookClassButton"> more info </button> */}
                       </Link>
                       {/* </div> */}
                       </ React.Fragment>
                        
                    ) 

                    

                    : null ))}
                   
                            </ React.Fragment>
                     ))}
                   
                    </div>
                ))}
            </div>
            
          
        </div>
        </>
    )
   
}

export default YogaClasses 