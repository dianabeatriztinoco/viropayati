
const CREATE_YOGA_CLASS_IMAGE = 's3/CREATE_YOGA_CLASS_IMAGE'



const yogaImage = (image) => ({
    type: CREATE_YOGA_CLASS_IMAGE,
    payload: image
})

const initialState = {image:null}; 

export const createNewYogaImage = (image) => async dispatch => {
    console.log(image)


    const response = await fetch(`/api/s3/upload`, {
        

        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
          
        },
        body:

            JSON.stringify({

                image: image
        
                })
         

                
    
     
    });
    
    console.log(response)
    console.log(image)

    if (response.ok) {
   
        const data = await response.json();
        console.log(data)
 
       dispatch(yogaImage(data))


    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function s3(state=initialState, action){
    switch(action.type){
        
        case CREATE_YOGA_CLASS_IMAGE: {

            return {...state}
          
        }
        default: 
        return state
    }
}