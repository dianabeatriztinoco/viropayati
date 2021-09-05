import { useState } from "react";
import { updatedYogaClass } from "../../store/yogaClass";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./editYogaClass.css"

const EditYogaClass = ({ yogaClass, hideForm }) => {

  console.log(yogaClass)
   
    const [editDescription, setEditDescription] = useState(yogaClass?.description)

    console.log(editDescription)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
    
        e.preventDefault()
        
        const payload = {

            id: yogaClass?.id,
            taughtBy : yogaClass.teacher_id,
            classDate : yogaClass.classDate, 
            pic: yogaClass.pic, 
            title: yogaClass.title, 
            price: yogaClass.price, 
            address: yogaClass.address,
            city: yogaClass.city, 
            state: yogaClass.state, 
            postalCode: yogaClass.postal_code, 
            description: editDescription,
        }

        console.log(payload)

        await dispatch(updatedYogaClass(payload, yogaClass.id))
      
        hideForm()
        history.push('/yogaClasses')
    }


    return (
      <>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="editDescriptionForm"
            name="description"
            placeholder="Edit Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></input>
         
            <button className="update-button" type="submit">
              Update Description
            </button>
            <button className="cancel-edit-button" onClick={hideForm}>
              Cancel
            </button>
          
        </form>
      </>
    );
}

export default EditYogaClass;
