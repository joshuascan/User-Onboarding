import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
}

const initialFormErrors = {
    name: '',
    email: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true



function App() {

    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewUser = newUser => {
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                setUsers([res.data, ...users])
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: ''}))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({ ...formValues, [name]: value })
    }

    const formSubmit = () => {
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            termsOfService: formValues.termsOfService,
        }
    }

  return (
    <div className="container app">
        <h1>New User Sign Up</h1>
        <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
    </div>
  );
}

export default App;
