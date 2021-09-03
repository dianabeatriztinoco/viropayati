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
  const [userId] = useState(sessionUser.id)
  console.log(userId)
  const [selectedYogaClassId] = useState(yogaClassId)
console.log(classId)
  
  const bookings = useSelector((state) => state.bookings)
  console.log(bookings)

  const booking =  bookings?.bookings?.yoga_class_bookings?.map((booking)=>{

    return booking 

  })

 
  const userClasses = []
  const bookedClass = booking?.find(selectedClass => {
   if(selectedClass.userId === +sessionUser.id){
    userClasses.push(selectedClass)
   }
    })
   
const userClass = userClasses.map((userClass)=>{
 console.log(userClass.classId)
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
          <>
            <EditYogaClass
              yogaClass={yogaClass}
              hideForm={() => setShowEditDescription(null)}
            />
          </>
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

  if (sessionUser?.isTeacher === false) {
    return (
      <>
        {yogaClasses?.yoga_classes.map((yogaClass) =>
          yogaClass.id === +classId ? (
            <div className="yogaDetailContainer">
              <img className="yogaClassDetailImage" src={yogaClass.pic} />
              {userClasses?.map((userClass) => userClass?.userId === sessionUser.id && userClass.classId === +classId ? (
                <>
                  <div className="alreadyBooked"> booked </div>
                  <button  className="bookClassButton"> cancel </button>
                </>
              ) : 
                
              (
              
              <div className="buttonContainer">
                <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
              </div>
               ) 
               ) }
            </div>
          ) : null
        )}
      </>
    );
  } else if (userClass.userId !== sessionUser.id) {
      return (
      
      
      <div className="buttonContainer">
      <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
    </div>)






    return (
      <>





        <div>this page is being read</div>
        {yogaClasses?.yoga_classes?.map((yogaClass) =>
          yogaClass.id === +classId ? (
            <div>
              <div className="yogaDetailContainer">
                <img className="yogaClassDetailImage" src={yogaClass.pic} />
              </div>
              <div>{yogaClass.description}</div>
              <div>
                {teachers?.teachers?.map((teacher) =>
                  sessionUser?.id === teacher.userId &&
                  teacher.id === yogaClass.teacher_id ? (
                    <div className="updateDelete">
                      <div>
                        <div
                          className="edit-post"
                          hidden={
                            sessionUser.id === teacher.userId &&
                            teacher.id === yogaClass.teacher_id
                              ? false
                              : true
                          }
                        >
                          <button
                            onClick={async () => await setShowEditDescription(yogaClass.id)}
                          >
                            update
                          </button>
                        </div>
                       
                        <button onClick={handleDelete}>delete</button>
                        {showEditDescription ? edit : ""}
                      </div>
                      
                    </div>
                  ) : (
                    false
                  )
                )}
              </div>
            </div>
          ) : null
        )}
      </>
    );
  }
};

export default YogaDetails;

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
