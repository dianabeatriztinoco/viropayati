import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createNewYogaClass } from '../../store/yogaClass';
import { getAllClasses } from '../../store/yogaClass';
import { getAllTeachers } from '../../store/teacher';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './yogaClassForm.css'

const YogaClassForm = () => {


    const history = useHistory()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([])
    const [classDate, setClassDate] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    


    

    const sessionUser = useSelector(state => state.session.user)
    

 useEffect(()=>{
   dispatch(getAllTeachers())
 }, [])

 const teachers = useSelector(state=>state.teachers.teachers)



    const onCreateYogaClass = async (e) => {
    
  
     e.preventDefault()

     const data = await dispatch(createNewYogaClass(taughtBy, classDate, image, title, description, price, address, city, state, postalCode))

     if (data) {
      
       setErrors(data)
     }
    else{
    return  <Redirect to='/' />
    }
   
  };

 const teacher =  teachers?.teachers?.map((teacher)=>{

    return teacher 

  })
 
  const selectedTeacher = teacher?.find((oneTeacher) => oneTeacher.userId === sessionUser.id);
  const [taughtBy] = useState(selectedTeacher?.id)
  



    const updateClassDate = (e) => {
        console.log(e.target.value)
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

      const updateTaughtBy = (e) => {

      
      }


     
      
    

  return (
    <div className="yogaClassFormOne">
    <div className="yogaClassForm">
    <div className="input">Create Class</div>
    <form onSubmit={onCreateYogaClass} method="POST">
    <div>
      {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
      ))}
    </div>
    <div className="input">
      
     {teachers?.teachers?.map((teacher)=> (
       teacher.userId === sessionUser.id ? 
      <input
        type='hidden'
        name='taughtBy'
        placeholder="Class Date"
        value={taughtBy}
        required={true}
      ></input>
      
      : null ))}
      </div>
   
     
    <div className="input">
     
      <input
        type='text'
        // className="classDate"
        name='class_date'
        placeholder="Class Date"
        onChange={updateClassDate}
        value={classDate}
        required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>Upload Image</label> */}
      <input
        type='text'
        // className="uploadImage"
        name='class_pic'
        placeholder="Upload Image"
        onChange={updateImage}
        value={image}
        required={true}
      
      ></input>
    </div>
    <div className="input">
      {/* <label>Title</label> */}
      <input
        type='text'
        // className="title"
        name='title'
        placeholder="Title"
        onChange={updateTitle}
        value={title}
        required={true}
       
      ></input>
    </div>
    <div className="input">
      {/* <label>Description</label> */}
      <input
        type='text'
        // className="description"
        name='description'
        placeholder="Description"
        onChange={updateDescription}
        value={description}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>Price</label> */}
      <input
        type='number'
        // className="price"
        name='price'
        placeholder="Price"
        onChange={updatePrice}
        value={price}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>Address</label> */}
      <input
        type='text'
        // className="address"
        name='address'
        placeholder="Address"
        onChange={updateAddress}
        value={address}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>City</label> */}
      <input
        type='text'
        // className="city"
        name='city'
        placeholder="City"
        onChange={updateCity}
        value={city}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>State</label> */}
      <input
        type='text'
        // className="state"
        name='state'
        placeholder="State"
        onChange={updateState}
        value={state}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div className="input">
      {/* <label>Postal Code</label> */}
      <input
        type='text'
        // className="postalCode"
        placeholder="Postal Code"
        name='postalCode'
        onChange={updatePostalCode}
        value={postalCode}
        required={true}
        
        // required={true}
      ></input>
    </div>
    <div className="input">
    <button className="yogaFormButton" type='submit'>Create</button>
    </div>
  </form>
  </div>
  </div>

  )
};

export default YogaClassForm;
