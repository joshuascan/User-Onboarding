import React from 'react'

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>

            <div className='form-group inputs'>
                <label>Name
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>

                <label>Password
                    <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    />
                </label>

                <label>Agree to Terms of Service
                    <input
                    type='checkbox'
                    name='termsOfService'
                    checked={values.termsOfService}
                    onChange={onChange}
                    />
                </label>
                
            <div className='form-group submit'>

                <button id='submitBtn' disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            </div>
        </form>
    )
}