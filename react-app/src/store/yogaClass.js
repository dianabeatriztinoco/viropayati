const GET_YOGA_CLASSES = 'yogaClasses/GET_YOGA_CLASSSES'; 
const DELETE_CLASS = 'yogaClasses/DELETE_CLASS';

const getClasses = (classes) => ({
    type: GET_YOGA_CLASSES, 
    payload: classes 
}); 

const deleteYogaClass = (yogaClass) => ({
    type: DELETE_CLASS,
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

export default function yogaClasses(state=initialState, action){
    switch(action.type){
        case GET_YOGA_CLASSES: {
            return {classes: action.payload}
        }
        default: 
        return state
    }
}