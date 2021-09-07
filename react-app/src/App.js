import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/navBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import SplashPage from './components/splashPage/SplashPage';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';
import YogaClasses from './components/yogaClasses/YogaClasses';
import YogaDetails from './components/yogaDetails/YogaDetails';
import YogaClassForm from './components/yogaClassForm/YogaClassForm';
import LoginFormModal from './components/LoginFormModal';
import TeacherReviews from './components/TeacherReviews/teacherReviews';
import BookedClasses from './components/BookedClasses/bookedClasses';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path='/' exact={true}>
       <SplashPage />
        </Route>
        <Route path='/homepage' exact={true}>
       <HomePage />
        </Route>
      {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route> */}
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <Route path='/bookedClasses' exact={true}>
          <BookedClasses />
        </Route>
        <Route path='/yogaClasses' exact={true}>
          <YogaClasses />
        </Route>
        <Route path='/yogaClasses/:classId/' exact={true}>
          <YogaDetails />
        </Route>
        <Route path='/login' exact={true}>
        <LoginForm />
        </Route>
        <Route path='/reviews' exact={true}>
        <TeacherReviews />
        </Route>
        {/* <Route path='/newClass' exact={true}>
          <YogaClassForm />
        </Route> */}
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
