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
import EditYogaClass from "../editYogaClass/EditYogaClass";
import { Link } from "react-router-dom";
import "./yogaDetails.css";

const YogaDetails = () => {
  const yogaClassId = +useParams().classId;
  console.log(yogaClassId)
  

  const history = useHistory();
  const { classId } = useParams();
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

  const bookedClass = booking?.find(selectedClass => {
   if(selectedClass.userId === +sessionUser?.id){
    userClasses.push(selectedClass, sessionUser.id)
   }
    })
   



  const yogaClasses = useSelector((state) => state.yogaClasses.classes);

  // const [yogaArr] = yogaClasses.yoga_classes
  //    console.log(yogaArr)
  // const yogaClassArray = Object.values(yogaClasses)
  //  const yogaClass = yogaArr?.find((yogaClass) => yogaClass.id === +yogaClassId);
  const allUsers = useSelector((state) => state.users.users);
  const teachers = useSelector((state) => state.teachers.teachers);

  const handleDelete = async () => {
    let deletedClass = await dispatch(deleteSelectedYogaClass(classId));
    if (deletedClass) {
      history.push("/yogaClasses");
    }
  };

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

   let bookedClass = await dispatch(createYogaBooking(userId, selectedYogaClassId));

   return (
     <>
     <form onchange={bookedClass} method='POST'>
     <input type='hidden' value={userId}></input>
     <input type='hidden' value={selectedYogaClassId}></input>
     </form>
     </>
    
   )
  }

  const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === +classId ) 
  const userClass = userClasses.find((selectedUserClass) => selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )
  const selectedYogaTeacher = teachers?.teachers?.find((teacher) => teacher.userId === sessionUser?.id && selectedYogaClass?.teacher_id === teacher.id)
 




  if (sessionUser?.isTeacher === false) {

   const selectedYogaClass = yogaClasses?.yoga_classes?.find((yogaClass) => yogaClass.id === +classId ) 
   console.log(selectedYogaClass)
   const userClass = userClasses.find((selectedUserClass) => selectedUserClass.classId === selectedUserClass.id && sessionUser.id === selectedUserClass.userId  )
    console.log(userClass)

   return (

    <div className="yogaDetailContainer">
    <div>
    <img className="yogaClassDetailImage" src={selectedYogaClass?.pic} />
    </div>
    <div>
      <div>{selectedYogaClass.description}</div>
    </div>
   
    {userClass.classId === selectedYogaClass.id ?
    <>
    <div className="alreadyBooked"> booked </div>
    <button  className="bookClassButton"> cancel </button>
   
    </>
 :   <div className="buttonContainer">
     <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
    </div>} 
    </div>
    
  )}

  else {
    return (
      <>
      <div className="yogaDetailContainer">
      <div>
      <img className="yogaClassDetailImage" src={selectedYogaClass?.pic} />
      </div>
      <div>
        <div>{selectedYogaClass?.description}</div>
      </div>
      </div>
      {selectedYogaTeacher?.id === selectedYogaClass?.teacher_id ? 
    <>
      <div className="updateDelete">
        <div>
        <div className="edit-post"
        hidden={
          sessionUser.id === selectedYogaTeacher?.userId &&
          selectedYogaTeacher?.id === selectedYogaClass?.teacher_id
          ? false : true
          }>

          <button onClick= {async () => await setShowEditDescription(selectedYogaClass?.id)}>update</button>
          <button onClick={handleDelete}>delete</button>
          {showEditDescription ? edit : ""}

        </div>
        </div>
        </div>
    </>  
    : null }
      </>

    )

  }
}
export default YogaDetails;

