import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import yogaClasses, { createNewYogaClass } from "../../store/yogaClass";
import { getAllClasses } from "../../store/yogaClass";
import { getAllTeachers } from "../../store/teacher";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import YogaClassFromModal from "../CreateClassModal";
import { getAllBookings } from "../../store/yogaClassBookings";
import { deleteSelectedYogaClassBooking } from "../../store/yogaClassBookings";
import { getAllUsers } from "../../store/user";
import './bookedClasses.css'

//import "./yogaClassForm.css";

const BookedClasses = () => {

  const dispatch = useDispatch()
  const history = useHistory();

const sessionUser = useSelector(state => state.session.user)
  // const yogaClasses = useSelector(state => state.yogaClasses.classes)
const allUsers = useSelector(state => state.users.users)
const teachers = useSelector(state => state.teachers.teachers)

const yogaTeacherArray = []
const yogaTeachers = allUsers?.users?.find((yogaTeacher) => { if (yogaTeacher?.isTeacher === true){

  yogaTeacherArray.push(yogaTeacher)
}} ) 

// const teacher = yogaTeacherArray.map((teacher) => teacher)

const bookedClasses = useSelector(state => state.bookings.bookings?.yoga_class_bookings)


const yogaClassDisplayed = []


const studentClasses = bookedClasses?.map((yogaClass)=>{
  
  if (yogaClass.userId === sessionUser.id){
    yogaClassDisplayed.push(yogaClass)
  }
  else {
    return "No Classes Booked!"
  }
})

//const yo = yogaClassDisplayed.map((yogaClassDisplayedObjects) => yogaClassDisplayedObjects)





const bookedYogaClass = useSelector(state => state.yogaClasses.classes?.yoga_classes)


const classDisplayedArray = []
const displayedClasses = bookedYogaClass?.filter( yogaClass => 

  {
    console.log(yogaClass.id)
    const yo = yogaClassDisplayed.map((obj) => {if(yogaClass.id === obj.classId){classDisplayedArray.push(yogaClass)}}   )
 
  }) 

classDisplayedArray.forEach(obj => console.log(obj))




useEffect(()=>{
  dispatch(getAllBookings())
  dispatch(getAllTeachers())
  dispatch(getAllUsers())
  dispatch(getAllClasses())
}, [])

 
// const handleDeleteBooking = async () => {

// const classBooked = bookedClasses.find((class) =>{class.userId === sessionUser.id})

// console.log(classBooked)

//     let deletedBooking = await dispatch(deleteSelectedYogaClassBooking(book.id))
//     if(deletedBooking) {
//       history.push(`/yogaClasses/`)
//     }

//   }

if (classDisplayedArray){
  return (
    
    <>

    <div className="bookedClassText">
          Your Classes 
          </div>
          <div>
          <div className="yogaStudentDeets">
           
    <div className="yogaDetailContainerStudent">

{classDisplayedArray.map(obj => ( 
        <div className="yogaDetailContainer">
          
        <div>
        <img className="yogaClassDetailImage" src={obj?.pic} />
       
        </div>
        <div className="mainClassDetails">
          <div className='classDetailsTitle'>{obj?.title}</div>
            <div className='classDetails'>{obj?.description}</div>
            <div className='classDetailsPrice'>${obj?.price}.00</div>
            <div className="buttonBookedCancel">
      

{bookedClasses.map((book) => (

book.classId === obj.id && sessionUser.id === book.userId ? (

    <button  onClick={() => 
      {
      dispatch(deleteSelectedYogaClassBooking(book.id))

      return history.push('/yogaClasses')
    
    }} 
    
    className="bookClassButton"> Cancel? </button>
)
    : null ))}
    </div>
            
            
          </div>
          </div>
      
      ))}
      </div>
     
      </div>
     
      </div>
    </>
  );
  }
 else {
      return (
          <div className="bookedClassText">no booked classes</div>
      )
  }
}

export default BookedClasses;