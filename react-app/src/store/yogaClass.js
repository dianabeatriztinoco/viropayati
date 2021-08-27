const GET_YOGA_CLASSES = 'yogaClasses/GET_YOGA_CLASSES'; 
const DELETE_CLASS = 'yogaClasses/DELETE_CLASS';
const CREATE_YOGA_CLASS = 'yogaClasses/CREATE_YOGA_CLASS';

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


const initialState = {classes:null}; 

export const getAllClasses = () => async dispatch => {
    const response  = await fetch('/api/yoga_classes');
    if (response.ok){
        const yogaClasses = await response.json()
        dispatch(getClasses(yogaClasses))

    }
}

export const deleteSelectedYogaClass = (id) => async dispatch => {

    const response = await fetch(`/api/yoga_classes/${id}`, {
        method: 'DELETE'
    })
    if (response.ok){
        const deleted = await response.json()
        dispatch(deleteYogaClass(id))
        return deleted
    }

}

export const createNewYogaClass = (classDate, image, title , description, price, address, city, state, postalCode) => async dispatch => {


    const response = await fetch(`/api/yoga_classes/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            classDate, image, title, description, price, address, city , state, postalCode
        })
    });
   
    if (response.ok) {
        const data = await response.json();
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

export default function yogaClasses(state=initialState, action){
    switch(action.type){
        case GET_YOGA_CLASSES: {
            return {classes: action.payload}
        }
        case CREATE_YOGA_CLASS: {

            return state
          
        }
        default: 
        return state
    }
}