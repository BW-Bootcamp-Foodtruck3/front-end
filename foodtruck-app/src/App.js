import React, { useEffect, useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";

import { trucks } from "./DummyData";
import SearchPage from "./pages/SearchPage"
import PrivateRoute from "./authorization/PrivateRoute"
import Home from "./pages/Home"
import Login from './components/Login';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestPage from "./pages/TestPage";

function App() {
  const [ data, setData ] = useState(trucks)
  const [ searchTerm, setSearchTerm ] = useState("")
  const searchResults = data.filter((truck) => truck.truckName.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(searchResults)
  return (
    <div>
      <NavBar/>
      <Route exact path="/" component={Home}></Route> {/*demo purposes*/}
      <Route exact path="/search" render={() => <SearchPage searchResults={searchResults}  setSearchTerm={setSearchTerm} />} />
      <Route exact path="/test" render={() => <TestPage />} />
      <Route exact path="/login" component={Login} />
      {/* <PrivateRoute path="/home"></PrivateRoute>
      <PrivateRoute path="/truckprofile/:id"></PrivateRoute> */}

    </div>
  );
}

export default App;
