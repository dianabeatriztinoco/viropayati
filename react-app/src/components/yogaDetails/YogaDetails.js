import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllClasses } from '../../store/yogaClass';
import { getAllTeachers } from '../../store/teacher';
import { getAllUsers } from '../../store/user';
import { deleteSelectedYogaClass } from '../../store/yogaClass';
import { Link } from 'react-router-dom';
import './yogaDetails.css'


const YogaDetails = () => {

    const { yogaClassId } = useParams();

    const history = useHistory()
    const {classId} = useParams()
    const dispatch = useDispatch()

    const [showEditCaption, setShowEditCaption] = useState(null)

    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const yogaClasses = useSelector(state => state.yogaClasses.classes)
    const allUsers = useSelector(state => state.users.users)
    const teachers = useSelector(state => state.teachers.teachers)

    const handleDelete = async () => {
        let deletedClass = await dispatch(deleteSelectedYogaClass(classId))
        if (deletedClass) {
         history.push('/')
        }
      }

      let handelUpdate = null;

    //   if (showEditCaption) {
    //     handelUpdate = (
    //     //   <EditCaption yogaClass={yogaClass} hideForm={() => setShowEditCaption(null)} />
    //     //)
    //   }
    
  

    useEffect(()=>{
        dispatch(getAllClasses())
        dispatch(getAllTeachers())
        dispatch(getAllUsers())
    }, [])
    if(sessionUser?.isTeacher === false){

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
             <div>this page is being read</div>
                {yogaClasses?.yoga_classes.map((yogaClass)=>(
                    
                 yogaClass.id === +classId ? (
                   <div>
                    <div className='yogaDetailContainer'>

                        <img className="yogaClassDetailImage" src={yogaClass.pic} />
                        
                        </div>
                         <div>
                             {teachers?.teachers.map((teacher)=>(
                                 sessionUser.id === teacher.userId && teacher.id === yogaClass.teacher_id ? (
                                     
                                     
                                     <div className="updateDelete">
                                      
                                  
                                        
                                       
                                            
                                         <div>
                                                <button>update</button>
                                                <button onClick={handleDelete}>delete</button>
                                            </div>
                                         
                                 
                                       
                                            
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