import React, { useState } from "react";

export const useForm = (defaultValues, cb) => {
    const [ values, setValues ] = useState(defaultValues);

    const setForm = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    
    const submitForm = (e) => {
        e.preventDefault()
        cb(values)
        e.target.reset()
        setValues(defaultValues)
    }

    return [ values, setForm, submitForm ]
}