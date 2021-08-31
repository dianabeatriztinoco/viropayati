import { useState } from "react";
import { updatedYogaClass } from "../../store/yogaClass";
import { useDispatch } from 'react-redux'
import "./editYogaClass.css"

const EditYogaClass = ({ yogaClass, hideForm }) => {
   
    const [editDescription, setEditDescription] = useState(yogaClass.description)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {

        e.preventDefault()

        const payload = {
            id: yogaClass.id,
            description: editDescription,
        }

        await dispatch(updatedYogaClass(payload))

        hideForm()
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
