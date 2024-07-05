import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import actionBasketPage from '../pages/BasketPage/actionBasketPage.js'
import BasketPage from '../pages/BasketPage'
import categoriesPageLoader from '../pages/CategoriesPage/categoriesPageLoader.js'
import CategoriesPage from '../pages/CategoriesPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import productsPageLoader from '../pages/ProductsPage/productsPageLoader.js'
import ReadyPage from '../pages/ReadyPage'
import SingleProductPage from '../pages/SingleProductPage'
import singleProductLoader from '../pages/SingleProductPage/singleProductLoader.js'
import links from './links.js'

const router = createBrowserRouter([
  {
    path: links.home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: links.categories,
        element: <CategoriesPage />,
        loader: categoriesPageLoader,
      },
      {
        path: links.categoriesId,
        element: <ProductsPage />,
        loader: productsPageLoader,
      },
      {
        path: links.productsId,
        element: <SingleProductPage />,
        loader: singleProductLoader,
      },
      {
        path: links.basket,
        element: <BasketPage />,
        action: actionBasketPage,
      },
    ],
  },
  {
    path: links.ready,
    element: <ReadyPage />,
    errorElement: <ErrorPage />,
  },
])

export default router
