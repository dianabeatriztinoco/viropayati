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

console.log(yogaClassDisplayed)



const bookedYogaClass = useSelector(state => state.yogaClasses.classes?.yoga_classes)
console.log(bookedYogaClass)

const classDisplayedArray = []
const displayedClasses = bookedYogaClass?.filter( yogaClass => 

  {
    console.log(yogaClass.id)
    const yo = yogaClassDisplayed.map((obj) => {if(yogaClass.id === obj.classId){classDisplayedArray.push(yogaClass)}}   )
 
  }) 

classDisplayedArray.forEach(obj => console.log(obj))

console.log(classDisplayedArray)


useEffect(()=>{
  dispatch(getAllBookings())
  dispatch(getAllTeachers())
  dispatch(getAllUsers())
  dispatch(getAllClasses())
}, [])

 
const handleDeleteBooking = async () => {

    let deletedBooking = await dispatch(deleteSelectedYogaClassBooking(studentClasses?.id))
    if(deletedBooking) {
      history.push(`/yogaClasses/`)
    }
  }

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
        {console.log(obj.classId)}
        </div>
        <div className="mainClassDetails">
          <div className='classDetailsTitle'>{obj?.title}</div>
            <div className='classDetails'>{obj?.description}</div>
            <div className='classDetailsPrice'>${obj?.price}.00</div>
            <div className="buttonBookedCancel">
    <button  onClick={handleDeleteBooking} className="bookClassButton"> Cancel? </button>
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