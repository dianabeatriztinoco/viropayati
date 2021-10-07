import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllBookings, createYogaBooking } from "../../store/yogaClassBookings";
import { getAllClasses, updatedYogaClass } from "../../store/yogaClass";
import { getAllTeachers } from "../../store/teacher";
import { getAllUsers } from "../../store/user";
import { deleteSelectedYogaClass } from "../../store/yogaClass";
import { deleteSelectedYogaClassBooking } from "../../store/yogaClassBookings";
import EditYogaClass from "../editYogaClass/EditYogaClass";
import { Link } from "react-router-dom";

import "./yogaDetails.css";

const TeacherDetails = () => {
  const teacherId = useParams().teacherId;
 



  const history = useHistory();


  // const { classId } = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  
  const [showEditDescription, setShowEditDescription] = useState(null);
  const [showYogaClasses, setShowYogaClasses] = useState();
  const [userId] = useState(sessionUser?.id)
 
  const [selectedTeacherId] = useState(teacherId)

  const bookings = useSelector((state) => state.bookings)

  const booking =  bookings?.bookings?.yoga_class_bookings?.map((booking)=>{

    return booking 

  })
  
  


  const userClasses = []

  const bookeddClass = booking?.find(selectedClass => {
   if(selectedClass?.userId === +sessionUser?.id){
    userClasses.push(selectedClass, sessionUser.id)
   }
    })


  const bookedClass = booking?.find(selectedClass => selectedClass?.userId === sessionUser?.id)




  const yogaClasses = useSelector((state) => state.yogaClasses.classes);


  // const yogaClassArray = Object.values(yogaClasses)
  //  const yogaClass = yogaArr?.find((yogaClass) => yogaClass.id === +yogaClassId);
  const allUsers = useSelector((state) => state.users.users);
  const teachers = useSelector((state) => state.teachers.teachers);
 

  // const handleDelete = async () => {
  //   let deletedClass = await dispatch(deleteSelectedYogaClass(yogaClassId));
  //   if (deletedClass) {
  //     history.push("/yogaClasses");
  //   }
  // };

  // const handleDeleteBooking = async () => {

  //   let deletedBooking = await dispatch(deleteSelectedYogaClassBooking(bookedClass?.id))
  //   if(deletedBooking) {
  //     history.push(`/yogaClasses/`)
  //   }
  // }

  // const handleUpdate = async () => <div> </div>;
  //   let handelUpdate = null;

  //   if (showEditDescription) {

  //     const handleYogaUpdate = async()=>{
  //     const [yogaArr] = yogaClasses.yoga_classes

  //     const yogaClass = yogaArr.find((yogaClass) => yogaClass.id === +yogaClassId)

  //     }
  //     handelUpdate = (
  //       <EditYogaClass yogaClass={yogaClass} hideForm={() => setShowEditDescription(null)} />
  //     )
  //   }

 

  // let edit = null;

  // if (showEditDescription) {
  //   yogaClasses?.yoga_classes.map((yogaClass) => {
  //     if (yogaClass.id === +yogaClassId) {
  //      edit = (
  //         <React.Fragment key={yogaClass.id}>
  //           <EditYogaClass
  //             yogaClass={yogaClass}
  //             hideForm={() => setShowEditDescription(null)}
  //           />
  //         </React.Fragment>
  //       );
  //     }

      //   : null

      //   edit = (

      //     <EditYogaClass yogaClass={yogaClass} hideForm={() => setShowEditDescription(null)} />
      //   )
  //   });
  // }

  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getAllTeachers());
    dispatch(getAllUsers());
  }, []);

  const handleCreateBooking = async () => {
    const payload = {
      userId, selectedYogaClassId
    }
    history.push(`/yogaClasses/`)
    await dispatch(createYogaBooking(payload));
   
  

  }

  const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === yogaClassId ) 
  const userClass = userClasses.find((selectedUserClass) => selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )
  const selectedYogaTeacher = teachers?.teachers?.find((teacher) => teacher?.userId === sessionUser?.id && selectedYogaClass?.teacher_id === teacher.id)

 


  if (sessionUser?.isTeacher === false ) {

   const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === yogaClassId ) 
 
   const userClass = userClasses?.find((selectedUserClass) => selectedUserClass.classId === yogaClassId)

   
   //selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )

   
   

     return (

    <div className="yogaStudentDeets">
    <div className="yogaDetailContainerStudent">
    <div className="yogaDetailContainer">
    <div>
    <img className="yogaClassDetailImage" src={selectedYogaClass?.pic} />
    </div>
    <div className="mainClassDetails">
      <div className='classDetailsTitle'>{selectedYogaClass?.title}</div>
        <div className='classDetails'>{selectedYogaClass?.description}</div>
        <div className='classDetailsPrice'>${selectedYogaClass?.price}.00</div>
        
        
      </div>
      </div>
      </div>
    <div>
      
     {userClass ? (
    
    <>
    <div  className="bookAndCancelButton">
      <div className="cancelDiv">
    <div className="alreadyBooked"> You're already booked! </div>
    <div className="cancelButton">
      <div className="buttonCancel">
    <button  onClick={handleDeleteBooking} className="bookClassButton"> Cancel? </button>
    </div>
    </div>
    </div>
   </div>
    </>
    
    ) : null 
     }
    {!userClass ? 
    
    <div className="buttonContainer"> 
    <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
    </div>
   
     
    : null }
   
    
    </div>
    </div>
  )}

  else {

    return (
      <>
      <div className="yogaDetailContainerTeacher">
      <div className="test">
      <div>
      <img className="yogaClassDetailImage" src={selectedYogaClass?.pic} />
      
          
      </div>
      
      <div className="mainClassDetails">
      <div className='classDetailsTitle'>{selectedYogaClass?.title}</div>
        <div className='classDetails'>{selectedYogaClass?.description}</div>
        <div className='classDetailsPrice'>${selectedYogaClass?.price}.00</div>
       
        
      </div>
     
     
    <>
    
        <div>
        <div className="edit-post"
        hidden={
          sessionUser?.id === selectedYogaTeacher?.userId &&
          selectedYogaTeacher?.id === selectedYogaClass?.teacher_id
          ? false : true
          }>
          {showEditDescription ? edit : ""}

        </div>
        </div>
        </>  

        </div>
        
       
       

        {selectedYogaTeacher?.id === selectedYogaClass?.teacher_id ? 
        <div className="buttonDivs">
    <button className='editButtons'onClick = {async () => await setShowEditDescription(selectedYogaClass?.id)}>Update</button>
    <button className='editButtons'onClick={handleDelete}>delete</button>
    </div>
       : null }
   
    
    
    </div>
    {/* <div className="updateDelete">
    <button className='editButtons'onClick = {async () => await setShowEditDescription(selectedYogaClass?.id)}>Update</button>
    <button className='editButtons'onClick={handleDelete}>delete</button>
    </div> */}
     
      </>
      

    )

  }
}

export default TeacherDetails;

