import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'

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

  return (
    <div className="App">
        {/* <Form /> */}
    </div>
  );
}

export default App;
