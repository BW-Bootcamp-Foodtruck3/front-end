import React, { useState } from "react";
// import { withFormik } from 'formik';

const RegistrationForm = () => {

    const [ inputState, setInputState ] = useState("");
    const [ users, setUsers ] = useState([{
        id: "",
        truckName: "",
        imageOfTruck: "",
        cusineType: "",
        location: "4435 El Camino Real, Irvine, CA"
    }])

    const changeHandler = (event) => {
        setInputState({...inputState, [event.target.name]: event.target.value});
        console.log(inputState)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setUsers([...users,{...inputState, id: Date.now()}])
        console.log(users);
    }
    

    return (
        <form onSubmit={submitHandler} className="registration-form">
            <label htmlFor="business-name__id" className="input-label">Truck Name:</label>
            <input 
                className="registration-form__input"
                placeholder="Truck Name"
                type="text"
                name="business-name"
                id="business-name__id"
                value={inputState.truckName}
                onChange={changeHandler}
            ></input>

            <label htmlFor="image-link__id" className="input-label">Image Link:</label>
            <input 
                className="registration-form__input"
                placeholder="Image Link"
                type="text"
                name="image-link"
                id="image-link__id"
                value={inputState.imageOfTruck}
                onChange={changeHandler}
            ></input>

            <label htmlFor="category__id" className="input-label">Food Category:</label>
            <input
                className="registration-form__input"
                placeholder="Category"
                type="text"
                name="category"
                id="category__id"
                value={inputState.cusineType}
                onChange={changeHandler}
            ></input>
            
            {/* <label htmlFor="email__id" className="input-label">Email:</label>
            <input
                className="registration-form__input"
                placeholder="Email"
                type="text"
                name="email"
                id="email__id"
                value={inputState.email}
                onChange={changeHandler}
            ></input> */}
            
            {/* <label htmlFor="password__id" className="input-label">New Password:</label>
            <input
                className="registration-form__input"
                placeholder="Password"
                type="text"
                name="password"
                id="password__id"
                value={inputState.password}
                onChange={changeHandler}
            ></input> */}

            <label htmlFor="address__id" className="input-label">Street Address:</label>
            <input
                className="registration-form__input"
                placeholder="Address"
                type="text"
                name="address"
                id="address__id"
                value={inputState.location}
                onChange={changeHandler}
            ></input>

            {/* <label htmlFor="state-select__id" className="input-label">State:</label>
            <select className="registration-form__select" name="state-select" id="state-select__id" value={inputState.state} onChange={changeHandler}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>	

            <label htmlFor="zip-code__id" className="input-label">Zip Code:</label>
            <input 
                className="registration-form__input"
                placeholder="Zip Code"
                type="text"
                name="zip-code"
                id="zip-code__id"
                value={inputState.zipCode}
                onChange={changeHandler}
            ></input> */}

            <button type="submit">Register</button>
        </form>
    )
}

export default RegistrationForm;

