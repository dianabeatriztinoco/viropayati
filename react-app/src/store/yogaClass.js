const GET_YOGA_CLASSES = 'yogaClasses/GET_YOGA_CLASSSES'; 

const getClasses = (classes) => ({
    type: GET_YOGA_CLASSES, 
    payload: classes 
}); 

const initialState = {classes:null}; 

export const getAllClasses = () => async dispatch => {
    const response  = await fetch('/api/yoga_classes');
    if (response.ok){
        const yogaClasses = await response.json()
        dispatch(getClasses(yogaClasses))

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