import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllClasses, updatedYogaClass } from "../../store/yogaClass";
import { getAllTeachers } from "../../store/teacher";
import { getAllUsers } from "../../store/user";
import { deleteSelectedYogaClass } from "../../store/yogaClass";
import EditYogaClass from "../editYogaClass/EditYogaClass";
import { Link } from "react-router-dom";
import "./yogaDetails.css";

const YogaDetails = () => {
  const yogaClassId = useParams().classId;

  const history = useHistory();
  const { classId } = useParams();
  const dispatch = useDispatch();

  const [showEditDescription, setShowEditDescription] = useState(null);
  const [showYogaClasses, setShowYogaClasses] = useState();

  const sessionUser = useSelector((state) => state.session.user);
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

  const handleUpdate = async () => <div> hi this is read</div>;
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

  if (sessionUser?.isTeacher === false) {
    return (
      <>
        {yogaClasses?.yoga_classes.map((yogaClass) =>
          yogaClass.id === +classId ? (
            <div className="yogaDetailContainer">
              <img className="yogaClassDetailImage" src={yogaClass.pic} />

              <div className="buttonContainer">
                <button className="bookClassButton"> book </button>
              </div>
            </div>
          ) : null
        )}
      </>
    );
  } else {
    return (
      <>
        <div>this page is being read</div>
        {yogaClasses?.yoga_classes.map((yogaClass) =>
          yogaClass.id === +classId ? (
            <div>
              <div className="yogaDetailContainer">
                <img className="yogaClassDetailImage" src={yogaClass.pic} />
              </div>
              <div>{yogaClass.description}</div>
              <div>
                {teachers?.teachers.map((teacher) =>
                  sessionUser.id === teacher.userId &&
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
