const GET_YOGA_CLASS_BOOKINGS = 'yogaClassBookings/GET_YOGA_CLASS_BOOKINGS'; 
const DELETE_CLASS_BOOKINGS = 'yogaClasses/DELETE_CLASS';
const CREATE_YOGA_CLASS_BOOKING = 'yogaClassBookings/CREATE_YOGA_CLASS_BOOKING';
// const UPDATE_YOGA_CLASS = 'yogaClasses/UPDATE_YOGA_CLASS'


const getBookings = (bookings) => ({
    type: GET_YOGA_CLASS_BOOKINGS, 
    payload: bookings 
}); 

const deleteYogaClassBooking = (yogaClass) => ({
    type: DELETE_CLASS_BOOKINGS,
    payload: yogaClass
})

const createYogaClassBooking = (yogaClass) => ({
    type: CREATE_YOGA_CLASS_BOOKING,
    payload: yogaClass
    
})

// const updateYogaClass = (yogaClass) => ({
//     type: UPDATE_YOGA_CLASS, 
//     yogaClass
// })


const initialState = {classes:null}; 

export const getAllBookings = () => async dispatch => {
    const response  = await fetch('/api/yoga_class_bookings/');
    if (response.ok){
        const yogaClassBookings = await response.json()
        dispatch(getBookings(yogaClassBookings))

    }
}

export const deleteSelectedYogaClassBooking = (id) => async dispatch => {

    const response = await fetch(`/api/yoga_class_bookings/${id}/`, {
        method: 'DELETE'
    })

  
    if (response.ok){
        const deleted = await response.json()
        dispatch(deleteYogaClassBooking(id))
        return deleted
    }

}

export const createYogaBooking = (yogaClass) => async dispatch => {
   

    
    const response = await fetch(`/api/yoga_class_bookings/new/`, {


        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
          
        },
        body: JSON.stringify(

        yogaClass


        )
        
     
    });
    


    if (response.ok) {
       
        const data = await response.json();     
       
       dispatch(createYogaClassBooking(data))


    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

// export const updatedYogaClass = (yogaClass) => async dispatch => {
//     const {id, description} = yogaClass

//     const res = await fetch(`/api/yoga_classes/update/${id}/`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(yogaClass)
//     })
//     if (res.ok) {
//         const editYogaClass = await res.json();
//         dispatch(updateYogaClass(editYogaClass))
//         return editYogaClass
//     }
// }

export default function yogaClassBookings(state=initialState, action){
    switch(action.type){
        case GET_YOGA_CLASS_BOOKINGS: {
            return {bookings: action.payload}
        }
        case CREATE_YOGA_CLASS_BOOKING: {

         return {...state, [action.yogaClass]: [action.yogaClass]}

            //return {...state}
          
        }
        case DELETE_CLASS_BOOKINGS: {
            let afterState = { ...state }

            delete afterState[action.id]
            return afterState
        }
        // case UPDATE_YOGA_CLASS: {

        //     const updatedState = { ...state, [action.yogaClass.id]: action.yogaClass }
        //     return updatedState
            
        // }
        default: 
        return state
    }
}