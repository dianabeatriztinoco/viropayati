import { useState } from "react";
import { updateCaption } from "../../store/post";
import { useDispatch } from 'react-redux'
import "./editYogaClass.css"

const EditYogaClass = ({ yogaClass, hideForm }) => {
    // const [editCaption, setEditCaption] = useState(post.caption)
    const [editDescription, setEditDescription] = useState(yogaClass.description)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {

        e.preventDefault()

        const payload = {
            id: post.id,
            caption: editDescription,
            pic_url: yogaClass.pic_url,
            user_id: postClass.user_id

        }

        await dispatch(update(payload))

        hideForm()
    }


    return (
      <>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-input-form"
            name="caption"
            placeholder="Caption Edit"
            value={editCaption}
            onChange={(e) => setEditDescription(e.target.value)}
          ></input>
         
            <button className="update-button" type="submit">
              Update Caption
            </button>
            <button className="cancel-edit-button" onClick={hideForm}>
              Cancel
            </button>
          
        </form>
      </>
    );
}

export default EditYogaClass;
