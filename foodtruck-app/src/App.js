import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, useLocation } from "react-router-dom";
import RegistrationForm from "./components/RegisterForm";
import Logo from "./components/LogoHeader";
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
  const [ selectedData, setSelectedData ] = useState({})
  const searchResults = data.filter((truck) => truck.truckName.toLowerCase().includes(searchTerm.toLowerCase()))
  let location = useLocation();
  useEffect(() => {
    const id = location.pathname.split("/")[2]
    const truckData = data.find((truck) => truck.id === parseInt(id))
    if (truckData) {
      setSelectedData(truckData)
    }
  }, [])
  console.log(selectedData)
  return (
    <div className="application-container">
      <div className="application-container__header-container">
        <Logo />
        <NavBar/>
      </div>
      <Route exact path="/" component={Home}></Route> {/*demo purposes*/}
      <Route exact path="/search" render={() => <SearchPage searchResults={searchResults}  setSearchTerm={setSearchTerm} setSelectedData={setSelectedData} />} />
      <Route exact path="/test/:id" render={() => <TestPage selectedData={selectedData}/>} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={() => {
          return (
            <RegistrationForm />
          )
        }}/>
      {/* <PrivateRoute path="/home"></PrivateRoute>
      // <PrivateRoute path="/truckprofile/:id"></PrivateRoute> */}
    </div>
  );
}

export default App;
