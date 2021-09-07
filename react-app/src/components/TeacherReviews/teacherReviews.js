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
import { getAllReviews } from "../../store/reviews";
import { getAllUsers } from "../../store/user";
import './teacherReview.css'

//import "./yogaClassForm.css";

const TeacherReviews = () => {
  const dispatch = useDispatch()

const sessionUser = useSelector(state => state.session.user)
  // const yogaClasses = useSelector(state => state.yogaClasses.classes)
const allUsers = useSelector(state => state.users.users)
const teachers = useSelector(state => state.teachers.teachers)

const yogaTeacherArray = []
const yogaTeachers = allUsers?.users?.find((yogaTeacher) => { if (yogaTeacher?.isTeacher === true){

  yogaTeacherArray.push(yogaTeacher)
}} ) 

// const teacher = yogaTeacherArray.map((teacher) => teacher)

  


useEffect(()=>{
  dispatch(getAllReviews())
  dispatch(getAllTeachers())
  dispatch(getAllUsers())
}, [])

 
 


  return (
    <>
    <div className="teacherText">
          Coming soon! 
      </div>
    </>
  );

}

export default TeacherReviews;