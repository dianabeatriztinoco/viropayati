import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import yogaClasses, { createNewYogaClass } from "../../store/yogaClass";
import { getAllClasses } from "../../store/yogaClass";
import { getAllTeachers } from "../../store/teacher";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import YogaClassFromModal from "../CreateClassModal";
import { getAllReviews } from "../../store/reviews";
import { getAllUsers } from "../../store/user";
import './teachReview.css'

const yogaAvatar = 'https://i.pinimg.com/280x280_RS/8b/ee/7b/8bee7b7d668becb00bb3b2e3d5f2b307.jpg'

//import "./yogaClassForm.css";

const TeacherReview = () => {

const teacherId = +useParams().teacherId

const dispatch = useDispatch()
const [selectedYogaTeacher] = useState(teacherId)
const sessionUser = useSelector(state => state.session.user)
  // const yogaClasses = useSelector(state => state.yogaClasses.classes)
const allUsers = useSelector(state => state.users.users)
//console.log(allUsers)
//const TeacherUsers = allUsers?.users.find((user)=>user.isTeacher === true )
//console.log(TeacherUsers)
const teachers = useSelector(state => state.teachers.teachers)

const reviews = useSelector(state=> state.TeacherReviews.reviews)
console.log(reviews)

const yogaTeacherArray = []
const yogaTeachers = allUsers?.users?.find((yogaTeacher) => { if (yogaTeacher?.isTeacher === true){

  yogaTeacherArray.push(yogaTeacher)
}} ) 

// const teacher = yogaTeacherArray.map((teacher) => teacher)
// console.log(yogaTeacherArray)
  




useEffect(()=>{
  dispatch(getAllReviews())
  dispatch(getAllTeachers())
  dispatch(getAllUsers())
}, [])



teachers?.teachers?.map((teacher) =>
 {
    if (teacher.userId === teacherId) {
        return (

            <div> yoooooooooooooo </div>

        )
    }
})



//   return (
//     <>
//     <div className="teacherText">
//       <div className="teacherContainer">
//          {yogaTeacherArray.map((oneTeacher)=>(
//            <Link className="teacherReviewLink" >
//            <div className="teacherReviewContainer"> 
//              <div className="teacherNameContainer">
//                <div className="teacherName">{oneTeacher.fullname}</div>
//                </div>
//           <img src={yogaAvatar} className="yogaAvatar"></img>
//           <div className="teacherReviewButtons">
//             <button>leave review</button>
//             <button>view reviews</button>
//           </div>
//           </div>
          
//           </Link>
         
//          ))}
//           </div>
//       </div>
//     </>
//   );

}

export default TeacherReview;