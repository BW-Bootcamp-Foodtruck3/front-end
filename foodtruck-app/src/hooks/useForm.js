import React, { useState } from "react";

export function useForm (defaultValues, cb) {
    const [ values, setValues ] = useState(defaultValues);

    const setForm = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
        // console.log(values)
    }

    const submitForm = (e) => {
        e.preventDefault()
        cb(values)
        setValues(defaultValues)
    }

    return [ values, setForm, submitForm ]
}