import React from 'core-js/library/fn/reflect/es7/metadata'

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
}