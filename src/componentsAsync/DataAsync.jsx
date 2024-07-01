import PropTypes from 'prop-types'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import Loader from '../componentsUI/Loader'

const DataAsync = ({ children }) => {
  const { data } = useLoaderData()

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data}>{children}</Await>
    </Suspense>
  )
}

DataAsync.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataAsync
