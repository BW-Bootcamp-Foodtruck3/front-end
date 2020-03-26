import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./authorization/PrivateRoute"
import Home from "./pages/Home"
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Route exact to="/" component={Home}></Route> {/*demo purposes*/}
      {/* <PrivateRoute to="/home"></PrivateRoute>
      <PrivateRoute to="/truckprofile/:id"></PrivateRoute> */}
    </div>
  );
}

export default App;
