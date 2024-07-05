import { useAsyncValue } from 'react-router-dom'
import EmptyData from '../../componentsUI/EmptyData'
import MainContainer from '../../componentsUI/MainContainer'
import Products from '../../componentsUI/Products'

const ProductsData = () => {
  const products = useAsyncValue()

  return (
    <MainContainer>
      {products.length > 0 && products.map((product) => <Products key={product.id} products={products} product={product} />)}
      {products.length === 0 && <EmptyData />}
    </MainContainer>
  )
}

export default ProductsData
