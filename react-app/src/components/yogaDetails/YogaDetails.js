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

const YogaDetails = () => {
  const yogaClassId = +useParams().classId;



  const history = useHistory();
  // const { classId } = useParams();
  // console.log(classId)
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  
  const [showEditDescription, setShowEditDescription] = useState(null);
  const [showYogaClasses, setShowYogaClasses] = useState();
  const [userId] = useState(sessionUser?.id)
 
  const [selectedYogaClassId] = useState(yogaClassId)

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

   console.log(userClasses)
  const bookedClass = booking?.find(selectedClass => selectedClass?.userId === sessionUser?.id)
  console.log(bookedClass)



  const yogaClasses = useSelector((state) => state.yogaClasses.classes);

  // const [yogaArr] = yogaClasses.yoga_classes
  //    console.log(yogaArr)
  // const yogaClassArray = Object.values(yogaClasses)
  //  const yogaClass = yogaArr?.find((yogaClass) => yogaClass.id === +yogaClassId);
  const allUsers = useSelector((state) => state.users.users);
  const teachers = useSelector((state) => state.teachers.teachers);
 

  const handleDelete = async () => {
    let deletedClass = await dispatch(deleteSelectedYogaClass(yogaClassId));
    if (deletedClass) {
      history.push("/yogaClasses");
    }
  };

  const handleDeleteBooking = async () => {
    console.log(bookedClass)
    let deletedBooking = await dispatch(deleteSelectedYogaClassBooking(bookedClass?.id))
    if(deletedBooking) {
      history.push(`/yogaClasses/`)
    }
  }

  // const handleUpdate = async () => <div> </div>;
  //   let handelUpdate = null;

  //   if (showEditDescription) {

  //     const handleYogaUpdate = async()=>{
  //     const [yogaArr] = yogaClasses.yoga_classes
  //     console.log(yogaArr)
  //     const yogaClass = yogaArr.find((yogaClass) => yogaClass.id === +yogaClassId)

  //     }
  //     handelUpdate = (
  //       <EditYogaClass yogaClass={yogaClass} hideForm={() => setShowEditDescription(null)} />
  //     )
  //   }

  useEffect(()=>{
      dispatch(getAllClasses())
      dispatch(getAllBookings())
  }, [])

  let edit = null;

  if (showEditDescription) {
    yogaClasses?.yoga_classes.map((yogaClass) => {
      if (yogaClass.id === +yogaClassId) {
       edit = (
          <React.Fragment key={yogaClass.id}>
            <EditYogaClass
              yogaClass={yogaClass}
              hideForm={() => setShowEditDescription(null)}
            />
          </React.Fragment>
        );
      }

      //   : null

      //   edit = (

      //     <EditYogaClass yogaClass={yogaClass} hideForm={() => setShowEditDescription(null)} />
      //   )
    });
  }

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
   
  
   
  //  return (
  //    <>
  //    <form onchange={bookedClass} method='POST'>
  //    <input type='hidden' value={userId}></input>
  //    <input type='hidden' value={selectedYogaClassId}></input>
  //    </form>
  //    </>
    
  //  )

  }

  const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === yogaClassId ) 
  const userClass = userClasses.find((selectedUserClass) => selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )
  const selectedYogaTeacher = teachers?.teachers?.find((teacher) => teacher?.userId === sessionUser?.id && selectedYogaClass?.teacher_id === teacher.id)




  if (sessionUser?.isTeacher === false ) {

   const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === yogaClassId ) 
   console.log(selectedYogaClass)
   const userClass = userClasses?.find((selectedUserClass) => selectedUserClass.classId === yogaClassId)
   console.log(userClass)
   
   //selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )
   //console.log(userClass)
   
   

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
          sessionUser.id === selectedYogaTeacher?.userId &&
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

export default YogaDetails;

