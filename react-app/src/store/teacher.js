const GET_YOGA_TEACHERS = 'yogaClasses/GET_YOGA_TEACHERS'; 

const getTeachers = (teachers) => ({
    type: GET_YOGA_TEACHERS, 
    payload: teachers 
}); 

const initialState = {teachers:null}; 

export const getAllTeachers = () => async dispatch => {
    const response  = await fetch('/api/teachers/');
    if (response.ok){
        const teachers = await response.json()
        dispatch(getTeachers(teachers))

    }
}

export default function teachers(state=initialState, action){
    switch(action.type){
        case GET_YOGA_TEACHERS: {
            return {teachers: action.payload}
        }
        default: 
        return state
    }
}