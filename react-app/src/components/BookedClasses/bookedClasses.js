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
console.log(bookedClasses)

const yogaClassDisplayed = []
const studentClasses = bookedClasses?.find(classes => classes?.userId === sessionUser?.id)
console.log(yogaClassDisplayed)
const bookedYogaClass = useSelector(state => state.yogaClasses.classes?.yoga_classes)
const displayedClasses = bookedYogaClass?.find(yogaClass => yogaClass?.id === studentClasses?.classId)
console.log(displayedClasses)

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

if (displayedClasses){
  return (
    <>
    <div className="bookedClassText">
          Your Classes 
          </div>
          <div>
          <div className="yogaStudentDeets">
    <div className="yogaDetailContainerStudent">
    <div className="yogaDetailContainer">
    <div>
    <img className="yogaClassDetailImage" src={displayedClasses?.pic} />
    </div>
    <div className="mainClassDetails">
      <div className='classDetailsTitle'>{displayedClasses?.title}</div>
        <div className='classDetails'>{displayedClasses?.description}</div>
        <div className='classDetailsPrice'>${displayedClasses?.price}.00</div>
       
        
        
      </div>
      </div>
      </div>
      </div>
      <div className="buttonBookedCancel">
    <button  onClick={handleDeleteBooking} className="bookClassButton"> Cancel? </button>
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