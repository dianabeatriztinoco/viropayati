const GET_YOGA_CLASSES = 'yogaClasses/GET_YOGA_CLASSES'; 
const DELETE_CLASS = 'yogaClasses/DELETE_CLASS';
const CREATE_YOGA_CLASS = 'yogaClasses/CREATE_YOGA_CLASS';
const UPDATE_YOGA_CLASS = 'yogaClasses/UPDATE_YOGA_CLASS'


const getClasses = (classes) => ({
    type: GET_YOGA_CLASSES, 
    payload: classes 
}); 

const deleteYogaClass = (yogaClass) => ({
    type: DELETE_CLASS,
    payload: yogaClass
})

const createYogaClass = (yogaClass) => ({
    type: CREATE_YOGA_CLASS,
    payload: yogaClass
})

const updateYogaClass = (yogaClass) => ({
    type: UPDATE_YOGA_CLASS, 
    yogaClass
})


const initialState = {classes:null}; 

export const getAllClasses = () => async dispatch => {
    const response  = await fetch('/api/yoga_classes/');
    if (response.ok){
        const yogaClasses = await response.json()
        dispatch(getClasses(yogaClasses))

    }
}

export const deleteSelectedYogaClass = (id) => async dispatch => {

    const response = await fetch(`/api/yoga_classes/${id}/`, {
        method: 'DELETE'
    })

  
    if (response.ok){
        const deleted = await response.json()
        dispatch(deleteYogaClass(id))
        return deleted
    }

}

export const createNewYogaClass = (taughtBy, classDate, image, title , description, price, address, city, state, postalCode) => async dispatch => {

   console.log(classDate, taughtBy)

    const response = await fetch(`/api/yoga_classes/new/`, {


        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({

        taughtBy,classDate, image, title, description, price, address, city , state, postalCode

        })
     
    });

  


    if (response.ok) {
        console.log(response)
        const data = await response.json();
        console.log(data)
       dispatch(createYogaClass(data))


    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const updatedYogaClass = (yogaClass) => async dispatch => {
    const {id, description} = yogaClass

    const res = await fetch(`/api/yoga_classes/update/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(yogaClass)
    })
    if (res.ok) {
        const editYogaClass = await res.json();
        dispatch(updateYogaClass(editYogaClass))
        return editYogaClass
    }
}

export default function yogaClasses(state=initialState, action){
    switch(action.type){
        case GET_YOGA_CLASSES: {
            return {classes: action.payload}
        }
        case CREATE_YOGA_CLASS: {

            return {...state}
          
        }
        case DELETE_CLASS: {
            let afterState = { ...state }

            delete afterState[action.id]
            return afterState
        }
        case UPDATE_YOGA_CLASS: {

            const updatedState = { ...state, [action.yogaClass.id]: action.yogaClass }
            return updatedState
            
        }
        default: 
        return state
    }
}