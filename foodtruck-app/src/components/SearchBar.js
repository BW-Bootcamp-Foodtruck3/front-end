import React from "react";
import { useForm } from "../hooks/useForm";

const SearchBar = () => {
    const [ values, setValues, submitForm ] = useForm({ searchTerm: '' }, (data) => { console.log(data)})
    return (    
        <div>
            <form onSubmit={submitForm}>
                <input type="text" onChange={setValues} values={values} name="searchTerm" />
            </form>
        </div>
    )
}

export default SearchBar;