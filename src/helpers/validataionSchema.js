import * as Yup from 'yup'

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Username can only contain letters and spaces')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be at least 13 digits')
    .required('Required'),
})

export default validationSchema
