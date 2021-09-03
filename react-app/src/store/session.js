// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const DEMO_LOGIN = 'session/demoLogin';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const studentDemoLogin = (demoUser) => {
  return {
    type: DEMO_LOGIN, 
    payload: demoUser
  }
}

const teacherDemoLogin = (demoUser) => {
  return {
    type: DEMO_LOGIN, 
    payload: demoUser
  }
}
const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const loginDemoStudent = () => async (dispatch) => {

  const response = await fetch('/api/auth/demoStudent', {
    method: 'POST',
  });

 if(response.ok){
   const data = await response.json()
  dispatch(studentDemoLogin(data));
  return response;
 }
}

export const loginDemoTeacher = () => async (dispatch) => {

  const response = await fetch('/api/auth/demoTeacher', {
    method: 'POST',
  });

 if(response.ok){
   const data = await response.json()
  dispatch(teacherDemoLogin(data));
  return response;
 }
}



export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (isTeacher, fullname, username, email, password) => async (dispatch) => {


  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isTeacher, 
      fullname,
      username,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
      case DEMO_LOGIN: 
      return { user: action.payload }
    default:
      return state;
  }
  
}
