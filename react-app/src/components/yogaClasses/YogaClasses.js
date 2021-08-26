import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllClasses } from '../../store/yogaClass';
import { getAllTeachers } from '../../store/teacher';
import { getAllUsers } from '../../store/user';
import './yogaClasses.css'

const YogaClasses = () => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    const yogaClasses = useSelector(state => state.yogaClasses.classes)
    const allUsers = useSelector(state => state.users.users)
    const teachers = useSelector(state => state.teachers.teachers)
    console.log( allUsers)
  

    useEffect(()=>{
        dispatch(getAllClasses())
        dispatch(getAllTeachers())
        dispatch(getAllUsers())
    }, [])


   if(sessionUser){

    return (
        <>
        <div className='yogaClassContainer'>
          
            <div className="yogaClassDisplay">
                {yogaClasses?.yoga_classes.map((yogaClass)=>(
                    <div className="classContainer">
                    <div className="style">{yogaClass.title}</div>
                   
                    <img className='yogaClassImage' src={yogaClass.pic} />
                  
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
                       <div className="teacher">taught by {user.fullname}</div>
                       {/* <button className="bookClassButton"> book class </button> */}
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
    else {
        return (
            <div  className='yogaClassContainer'>non signed in user</div>
        )
    }
}

export default YogaClasses 