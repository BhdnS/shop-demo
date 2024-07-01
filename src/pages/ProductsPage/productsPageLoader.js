import { CATEGORIES_API } from '../../api/apiFakeStore.js'
import getData from '../../helpers/getData.js'

const productsPageLoader = ({ params }) => {
  const id = params.id

  const products = getData(`${CATEGORIES_API}/${id}/products`)

  return { data: products }
}

export default productsPageLoader
