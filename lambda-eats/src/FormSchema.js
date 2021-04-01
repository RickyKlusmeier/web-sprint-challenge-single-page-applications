import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    size: yup
        .string()
        .required('How big you want it'),

    special: yup
        .string()
        .trim(),
      
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    spinach: yup.boolean(),
    blackOlives: yup.boolean(),
})

export default formSchema;
