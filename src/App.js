import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';
import { fakeData } from './fakeData/fakeData';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/tourist-spots/:tourLocation">
          <Booking></Booking>
        </Route>
        <PrivateRoute path="/search">
          <Search></Search>
        </PrivateRoute>
        <Route path="/searchTest">
          <Search></Search>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
