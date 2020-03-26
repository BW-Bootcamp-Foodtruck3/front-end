import React from 'react'
import { useForm } from "../hooks/useForm";
import axios from "axios"




const Login = () => {
const [ values, setValues, submitForm ] = useForm({ 
    username: '', password: ''},
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
            <form onSubmit={submitForm} >

            <label>  
            <input type="text" onChange={setValues} values={values} name="username" placeholder="username" />
            </label> 
            <label>  
            <input type="password" onChange={setValues} values={values} name="password" placeholder="password" />
            </label>
            <label>  
                <button>Submit</button>
            </label>

            </form>
        </div>
    );
}


export default Login;