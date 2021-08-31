import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createNewYogaClass } from '../../store/yogaClass';
import { getAllClasses } from '../../store/yogaClass';
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

 

    const onCreateYogaClass = async (e) => {
     e.preventDefault()

     const data = await dispatch(createNewYogaClass(classDate, image, title, description, price, address, city, state, postalCode))

     if (data) {
       console.log(classDate)
       setErrors(data)
     }
    
     history.push('/')

   
  };



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

      
    

  return (
    <div className="yogaClassForm">
    <form onSubmit={onCreateYogaClass} method="POST">
    <div>
      {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
      ))}
    </div>
    <div>
      <label>Class Date</label>
      <input
        type='text'
        className="classDate"
        name='class_date'
        onChange={updateClassDate}
        value={classDate}
        required={true}
      ></input>
    </div>
    <div>
      <label>Upload Image</label>
      <input
        type='text'
        className="uploadImage"
        name='class_pic'
        onChange={updateImage}
        value={image}
        required={true}
      
      ></input>
    </div>
    <div>
      <label>Title</label>
      <input
        type='text'
        className="title"
        name='title'
        onChange={updateTitle}
        value={title}
        required={true}
       
      ></input>
    </div>
    <div>
      <label>Description</label>
      <input
        type='text'
        className="description"
        name='description'
        onChange={updateDescription}
        value={description}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div>
      <label>Price</label>
      <input
        type='number'
        className="price"
        name='price'
        onChange={updatePrice}
        value={price}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div>
      <label>Address</label>
      <input
        type='text'
        className="address"
        name='address'
        onChange={updateAddress}
        value={address}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div>
      <label>City</label>
      <input
        type='text'
        className="city"
        name='city'
        onChange={updateCity}
        value={city}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div>
      <label>State</label>
      <input
        type='text'
        className="state"
        name='state'
        onChange={updateState}
        value={state}
        required={true}
       
        // required={true}
      ></input>
    </div>
    <div>
      <label>Postal Code</label>
      <input
        type='text'
        className="postalCode"
        name='postalCode'
        onChange={updatePostalCode}
        value={postalCode}
        required={true}
        
        // required={true}
      ></input>
    </div>
    <button className="yogaFormButton" type='submit'>Create</button>
  </form>
  </div>

  )
};

export default YogaClassForm;
