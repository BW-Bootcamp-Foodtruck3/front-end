import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";

import PrivateRoute from "./authorization/PrivateRoute"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Route exact to="/" component={Home}></Route> {/*demo purposes*/}
      {/* <PrivateRoute to="/home"></PrivateRoute>
      <PrivateRoute to="/truckprofile/:id"></PrivateRoute> */}
    </div>
  );
}

export default App;
