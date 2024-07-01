import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Categories = ({ category }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card component={Link} to={`${category.id}`}>
        <CardMedia
          component='img'
          height='140'
          image={category.image}
          alt={category.name}
        />
        <CardContent>
          <Typography variant='h6' component='div'>
            {category.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

Categories.propTypes = {
  category: PropTypes.object.isRequired,
}

export default Categories
