const GET_All_USERS = "/users/GET_All_USERS";

const getUser = (users) => ({
    type: GET_All_USERS,
    payload: users,
  });

  export const getAllUsers = () => async (dispatch) => {
    const response = await fetch("/api/users/");
  
    if (response.ok) {
      const users = await response.json();
      dispatch(getUser(users));
    }
  };
  
  const initialState = {};

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_All_USERS: {
            return { users:action.payload };
          }
      
          default:
            return state;
        }
      }