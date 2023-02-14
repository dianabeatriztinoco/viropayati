import { useState } from "react";
import { updatedYogaClass } from "../../store/yogaClass";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./editYogaClass.css"

const EditYogaClass = ({ yogaClass, hideForm }) => {


   
    const [editDescription, setEditDescription] = useState(yogaClass?.description)

 

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


        await dispatch(updatedYogaClass(payload, yogaClass.id))
      
        hideForm()
        history.push('/yogaClasses')
    }


    return (
      <>
      <div className="updateDescriptionHere">
       update description below <i class="fas fa-arrow-down"></i>
       </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <textarea
            className="editDescriptionForm"
            type='textarea'
            name="description"
            placeholder="Edit Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
            <div className="updateAndCancelButton">
            <button className="update-button" type="submit">
              update description
            </button>
            <button className="cancel-edit-button" onClick={hideForm}>
              cancel
            </button>
            </div>
          
        </form>
      </>
    );
}

export default EditYogaClass;
