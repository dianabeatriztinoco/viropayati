import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import yogaClasses from './yogaClass';
import teachers from './teacher';
import users from './user'
import bookings from './yogaClassBookings'
import TeacherReviews from './reviews'
import s3 from './s3';


const rootReducer = combineReducers({
  session,
  yogaClasses,
  teachers, 
  users, 
  bookings,
  TeacherReviews,
  s3

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
