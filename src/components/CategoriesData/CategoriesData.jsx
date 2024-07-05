import { useAsyncValue } from 'react-router-dom'
import Categories from '../../componentsUI/Categories'
import EmptyData from '../../componentsUI/EmptyData'
import MainContainer from '../../componentsUI/MainContainer'

const CategoriesData = () => {
  const categories = useAsyncValue()

  return (
    <MainContainer>
      {categories.length > 0 && categories.map((category) => <Categories category={category} key={category.id} />)}
      {categories.length === 0 && <EmptyData />}
    </MainContainer>
  )
}

export default CategoriesData
