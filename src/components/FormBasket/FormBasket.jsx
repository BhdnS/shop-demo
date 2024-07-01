import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import validationSchema from '../../helpers/validataionSchema.js'
import styles from './FormBasket.styles.js'

const FormBasket = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
    },
    validationSchema,
  })

  return (
    <Box>
      <TextField
        fullWidth
        id='username'
        name='username'
        label='Username'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        margin='normal'
      />
      <TextField
        fullWidth
        id='email'
        name='email'
        label='Email'
        type='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin='normal'
      />
      <TextField
        fullWidth
        id='phone'
        name='phone'
        label='Phone'
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        margin='normal'
      />
      <input type='hidden' name='data' id='data' defaultValue={data} />
      <Button
        color='primary'
        variant='contained'
        fullWidth
        type='submit'
        sx={styles.btn}
        disabled={!formik.isValid || !formik.dirty}
      >
        Submit
      </Button>
    </Box>
  )
}

FormBasket.propTypes = {
  data: PropTypes.array.isRequired,
}

export default FormBasket
