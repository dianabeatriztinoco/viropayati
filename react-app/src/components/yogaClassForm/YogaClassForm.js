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

import "./yogaClassForm.css";

const YogaClassForm = ({ setShowModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);

  const [classDate, setClassDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, []);

  const teachers = useSelector((state) => state.teachers.teachers);


  const teacher = teachers?.teachers?.map((teacher) => {
    return teacher;
  });
  console.log(teacher)



  // oneTeacher?.userId === sessionUser?.id

  const selectedTeacher = teacher.find((oneTeacher) => oneTeacher.userId === sessionUser.id);
console.log(selectedTeacher)

const [taughtBy] = useState(selectedTeacher.userId)
console.log(taughtBy)

  const updateClassDate = (e) => {
    setClassDate(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  const updatePostalCode = (e) => {
    setPostalCode(e.target.value);
  
  };

// const updateTaughtBy = () => {
//   setTaughtBy(selectedTeacher.userId);
// }





  // const upDateSetSubmitted = (e) => {
  //   setSubmitted(true)
  // }

  // if(onCreateYogaClass){
  //   return <Redirect to='/'/>
  // }

  const onCreateYogaClass = async (e) => {

    e.preventDefault();
    console.log(taughtBy)
    const data = await dispatch(
      createNewYogaClass(
        taughtBy,
        classDate,
        image,
        title,
        description,
        price,
        address,
        city,
        state,
        postalCode
      )
    );
    
    if (data) {
      setErrors(data);
      
    } else {
    history.push(`/homepage/`)
     setShowModal(false);
     
    }
  };

  return (
    <div className="yogaClassFormOne">
      <div className="yogaClassForm">
        <div className="input">Create Class</div>
        <form onSubmit={onCreateYogaClass} method="POST">
        <div>
        {errors.map((error, ind) => (
          <ul>
          
            <li key={ind}>{error}</li>
            
          </ul>
        ))}
      </div>
          <div className="input">
            {/* {teachers?.teachers?.map((teacher) =>
              teacher.userId === sessionUser.id ? ( */}
                <input
                  type="hidden"
                  name="taughtBy"
                  value={taughtBy}
                 onChange={taughtBy}
                  required={true}
                ></input>
             {/* ) : null */}
           {/* )} */}
          </div>

          <div className="input">
            <label>Class Date</label>

            <input
              type="text"
              // className="classDate"
              name="class_date"
              placeholder="Class Date"
              onChange={(e) => setClassDate(e.target.value)}
              value={classDate}
              required={true}
            ></input>
          </div>
          <div className="input">
            <label>Upload Image</label>
            <input
              type="text"
              // className="uploadImage"
              name="class_pic"
              placeholder="Upload Image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required={true}
            ></input>
          </div>
          <div className="input">
            <label>Title</label>
            <input
              type="text"
              // className="title"
              name="title"
              placeholder="Title"
              onChange={updateTitle}
              value={title}
              required={true}
            ></input>
          </div>
          <div className="input">
            <label>Description</label>
            <input
              type="text"
              // className="description"
              name="description"
              placeholder="Description"
              onChange={updateDescription}
              value={description}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <label>Price</label>
            <input
              type="text"
              // className="price"
              name="price"
              placeholder="Price"
              onChange={updatePrice}
              value={price}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <label>Address</label>
            <input
              type="text"
              // className="address"
              name="address"
              placeholder="Address"
              onChange={updateAddress}
              value={address}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <label>City</label>
            <input
              type="text"
              // className="city"
              name="city"
              placeholder="City"
              onChange={updateCity}
              value={city}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <label>State</label>
            <input
              type="text"
              // className="state"
              name="state"
              placeholder="State"
              onChange={updateState}
              value={state}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <label>Postal Code</label>
            <input
              type="text"
              // className="postalCode"
              placeholder="Postal Code"
              name="postalCode"
              onChange={updatePostalCode}
              value={postalCode}
              required={true}

              // required={true}
            ></input>
          </div>
          <div className="input">
            <button className="yogaFormButton" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YogaClassForm;
