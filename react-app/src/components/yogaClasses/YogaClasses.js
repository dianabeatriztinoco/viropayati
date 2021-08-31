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
          
            <div className="yogaClassDisplay">
                {yogaClasses?.yoga_classes.map((yogaClass)=>(
                    <div className="classContainer">
                    <div className="style">{yogaClass.title}</div>
                    <Link to={`/yogaClasses/${yogaClass.id}`}>
                    <img className='yogaClassImage' src={yogaClass.pic} />
                    </Link>
                  
                    {/* {yogaClass.address} */}
                    {/* {yogaClass.city} */}
                    {/* {yogaClass.state} */}
                    {/* {yogaClass.postal_code} */}
                    {/* {yogaClass.price} */}
                    {/* {yogaClass.description} */}
                    {/* {yogaClass.title} */}

                   {teachers?.teachers.map((teacher)=> (
                       <>
                       {allUsers?.users.map((user)=>(

                   yogaClass.teacher_id === teacher.id && teacher.userId === user.id ?  (
                       <>
                       <div className="date">{yogaClass.classDate}</div>
                       <div className="teacher">taught by {user.fullname}</div>
                       <Link to={`/yogaClasses/${yogaClass.id}`}>
                       {/* <div className="buttonContainer"> */}
                       {/* <button className="bookClassButton"> more info </button> */}
                       </Link>
                       {/* </div> */}
                       </>
                        
                    ) 

                    

                    : null ))}
                   
                            </>
                     ))}
                   
                    </div>
                ))}
            </div>
            
          
        </div>
        </>
    )
   
}

export default YogaClasses 