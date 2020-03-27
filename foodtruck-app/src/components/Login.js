import React from 'react'
import { useForm } from "../hooks/useForm";
import axios from "axios"




const Login = () => {
const [ values, setValues, submitForm ] = useForm({ 
    email: '', password: ''},
     (data) => {
    
        axios
          .post("https://reqres.in/api/users/", data)
          .then(response => {
            console.log(response);
            setValues(response.data);
           
          })
          .catch(err => console.log(err.response));

      } )  



    return (
        <div>
            <form onSubmit={submitForm} className="login-form" >

            <label className="input-label">  
            <input type="email" onChange={setValues} values={values} name="email" placeholder="email"  />
            </label> 
            <label className="input-label">  
            <input type="password" onChange={setValues} values={values} name="password" placeholder="password"/>
            </label>
            <label className="input-label">  
                <button className="button">Submit</button>
            </label>

            </form>
        </div>
    );
}


export default Login;