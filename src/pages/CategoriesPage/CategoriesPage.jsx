import CategoriesData from '../../components/CategoriesData'
import DataAsync from '../../componentsAsync/index.js'

const CategoriesPage = () => {
  return (
    <DataAsync>
      <CategoriesData />
    </DataAsync>
  )
}

export default CategoriesPage
