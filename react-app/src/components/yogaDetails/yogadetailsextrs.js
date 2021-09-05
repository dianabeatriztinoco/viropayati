//     return (
     
// <>
// <div>
  
//      {userClass.userId === sessionUser.id ?
      
//        (
//       <>
//       <div>
//         yooo
//       </div>
   
//       </> ) : null }
//       </div>
// </>
//    )}
   
//    return (

// <div> yoooooo </div>

//    )
     
    //     {yogaClasses?.yoga_classes.map((yogaClass) =>
    //       yogaClass.id === +classId ? (
    //         <div className="yogaDetailContainer">
    //           <img className="yogaClassDetailImage" src={yogaClass.pic} />
    //           {userClasses?.map((userClass) => userClass?.userId === sessionUser.id && userClass.classId === +classId ? (
    //             <>
    //               <div className="alreadyBooked"> booked </div>
    //               <button  className="bookClassButton"> cancel </button>
    //             </>
    //           ) : 
                
    //           (
              
    //           <div className="buttonContainer">
    //             <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
    //           </div>
    //            ) 
    //            ) }
    //         </div>
    //       ) : null
    //     )}
    //   </>
    // ): null
    // )
    // </>
    //            } else if  (userClass.userId !== sessionUser.id) {
    //   return (
      
      
    //   <div className="buttonContainer">
    //   <button onClick={handleCreateBooking} className="bookClassButton"> Book Class </button>
    // </div>)
  
              // }}


//   else if (sessionUser?.isTeacher === true){
//   return (
//   <div>yoyoyoyoyoyoyoyoyoyoyo</div>
//   )
// }



  //  if (sessionUser?.isTeacher === true) {

  // return (
    
  //       <div>this page is being read</div>
  //       {yogaClasses?.yoga_classes?.map((yogaClass) =>
  //         yogaClass.id === +classId ? (
  //           <div>
  //             <div className="yogaDetailContainer">
  //               <img className="yogaClassDetailImage" src={yogaClass.pic} />
  //             </div>
  //             <div>{yogaClass.description}</div>
  //             <div>
  //               {teachers?.teachers?.map((teacher) =>
  //                 sessionUser?.id === teacher.userId &&
  //                 teacher.id === yogaClass.teacher_id ? (
  //                   <div className="updateDelete">
  //                     <div>
  //                       <div
  //                         className="edit-post"
  //                         hidden={
  //                           sessionUser.id === teacher.userId &&
  //                           teacher.id === yogaClass.teacher_id
  //                             ? false
  //                             : true
  //                         }
  //                       >
  //                         <button
  //                           onClick={async () => await setShowEditDescription(yogaClass.id)}
  //                         >
  //                           update
  //                         </button>
  //                       </div>
                       
  //                       <button onClick={handleDelete}>delete</button>
  //                       {showEditDescription ? edit : ""}
  //                     </div>
                      
  //                   </div>
  //                 ) : (
  //                   false
  //                 )
  //               )}
  //             </div>
  //           </div>
  //         ) : null
  //       )}
  
  //   );
  // } 
}


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













<div className="updateDelete">
                   <div>
                      <div
                         className="edit-post"
                        hidden={
                          sessionUser.id === teacher.userId &&
                           teacher.id === yogaClass.teacher_id
                           ? false                             : true
                        }
//                       >
//                         <button
//                           onClick={async () => await setShowEditDescription(yogaClass.id)}
//                         >
//                           update
//                         </button>
//                       </div>
                     
//                       <button onClick={handleDelete}>delete</button>
//                       {showEditDescription ? edit : ""}
//                     </div>
                    
//                   </div>
//                 ) : (
//                   false
//                 )
//               )}


<button onClick={async () => await setShowEditDescription(yogaClass.id)}
                       >
                         update                        </button>






<button onClick={async () => await setShowEditDescription(yogaClass.id)} >