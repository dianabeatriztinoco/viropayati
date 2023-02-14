const GET_YOGA_TEACHERS = 'yogaClasses/GET_YOGA_TEACHERS'; 
const CREATE_YOGA_TEACHER = 'yogaClasses/CREATE_YOGA_TEACHERS'

const getTeachers = (teachers) => ({
    type: GET_YOGA_TEACHERS, 
    payload: teachers 
}); 

const createTeacher = (userId) => ({
    type: CREATE_YOGA_TEACHER,
    payload: userId
})

const initialState = {teachers:null}; 

export const getAllTeachers = () => async dispatch => {
    const response  = await fetch('/api/teachers/');
    if (response.ok){
        const teachers = await response.json()
        dispatch(getTeachers(teachers))

    }
}

export const createNewYogaTeacher = (userId) => async dispatch => {



    const response = await fetch(`/api/teachers/new`, {


        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({

        userId: userId

        })
     
    });
 

    if (response.ok) {
   
        const data = await response.json();
 
       dispatch(createTeacher(data))


    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function teachers(state=initialState, action){
    switch(action.type){
        case GET_YOGA_TEACHERS: {
            return {teachers: action.payload}
        }
        case CREATE_YOGA_TEACHER: {

            return {...state}
          
        }
        default: 
        return state
    }
}