import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllClasses } from '../../store/yogaClass';
import { getAllTeachers } from '../../store/teacher';
import { getAllUsers } from '../../store/user';
import { Link } from 'react-router-dom';
import './yogaDetails.css'


const YogaDetails = () => {
    const {classId} = useParams()
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const yogaClasses = useSelector(state => state.yogaClasses.classes)
    const allUsers = useSelector(state => state.users.users)
    const teachers = useSelector(state => state.teachers.teachers)
 
  

    useEffect(()=>{
        dispatch(getAllClasses())
        dispatch(getAllTeachers())
        dispatch(getAllUsers())
    }, [])
    if(sessionUser.isTeacher === false){

    return (
    <>
        {yogaClasses?.yoga_classes.map((yogaClass)=>(
         yogaClass.id === +classId ? (
            <div  className='yogaDetailContainer'>
                <img className="yogaClassDetailImage" src={yogaClass.pic} />

                 <div className="buttonContainer">
                       <button className="bookClassButton"> book </button>
                       </div>
            </div>
         )
    
    
    : null ))}
    </>
    )
}
else {
    return (

            <>
                {yogaClasses?.yoga_classes.map((yogaClass)=>(
                    
                 yogaClass.id === +classId ? (
                   <div>
                    <div className='yogaDetailContainer'>

                        <img className="yogaClassDetailImage" src={yogaClass.pic} />
                        
                        </div>
                         <div>
                             {teachers?.teachers.map((teacher)=>(
                                 yogaClass.teacher_id === teacher.id ? (
                                     
                                    <div className="updateDelete">
                                      
                                    {allUsers?.users.map((user)=>(
                                        
                                        teacher.userId === user.id ? (
                                            <div>
                                                <button>update</button>
                                                <button>delete</button>
                                            </div>
                                        )
                                   : false  ))}
                                       
                                            
                                    </div>
                                
                             ): false ))}
                             </div>
                             
                               </div>
                    
                 )
            
            
            : null ))}
            </>
            )
    
}

}

export default YogaDetails



 //  <div>
                    //      {teachers?.teachers.map((teacher)=>(
                    //          <>
                    //          <>
                    //          <>

                    //          {allUsers?.users.map((user) => (
                              
                    //             yogaClass.teacher_id === teacher.id && teacher.userId === sessionUser.id ? (
                    //               <></>

                    //             ):null ))

                    //          </>
                    //          }
                             
                    //      ))}
                    //  </div>