import { CATEGORIES_API } from '../../api/apiFakeStore.js'
import getData from '../../helpers/getData.js'

export const categoriesPageLoader = async () => {
  const categories = getData(CATEGORIES_API)

  return { data: categories }
}

export default categoriesPageLoader
