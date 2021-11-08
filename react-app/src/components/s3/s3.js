import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createNewYogaImage } from "../../store/s3";

import "./s3.css";

const S3 = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  
  // const image = useParams();

  useEffect(() => {
    dispatch(createNewYogaImage());
  }, []);

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const onCreateYogaImage = async (e) => {
 
    e.preventDefault();
    console.log(typeof image)
   dispatch(createNewYogaImage(image));

   
  };

  return (
    <>
      <div class="content">
        <h3>Flask Drive: S3 Flask Demo</h3>
        <p>Welcome to this AWS S3 Demo</p>
        <div>
          <h3>Upload your file here:</h3>
          <form onSubmit={onCreateYogaImage} method="POST">
            <input
              type="file"
              name="file"
              value={image}
              onChange={updateImage}
            />
            <button type="submit" value="Upload" />
          </form>
        </div>
      </div>
    </>
  );
};

export default S3;
