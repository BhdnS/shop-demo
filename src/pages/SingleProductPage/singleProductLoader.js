import { SINGLE_PRODUCT_API } from '../../api/apiFakeStore.js'
import getData from '../../helpers/getData.js'

const singleProductLoader = ({ params }) => {
  const id = params.id

  const product = getData(`${SINGLE_PRODUCT_API}/${id}`)

  return { data: product }
}

export default singleProductLoader
