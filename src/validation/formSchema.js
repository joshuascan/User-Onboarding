import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .matches(' ', 'Must include first and last name'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    termsOfService: yup
        .boolean()
        .oneOf([true], 'You must agree to the terms of service')
})

export default formSchema