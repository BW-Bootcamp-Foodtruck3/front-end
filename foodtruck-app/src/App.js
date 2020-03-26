import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import SearchBar from "./components/SearchBar"
import PrivateRoute from "./authorization/PrivateRoute"
import Home from "./pages/Home"
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path="/" component={Home}></Route> {/*demo purposes*/}
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/login" component={Login} />
      {/* <PrivateRoute path="/home"></PrivateRoute>
      <PrivateRoute path="/truckprofile/:id"></PrivateRoute> */}
    </div>
  );
}

export default App;
