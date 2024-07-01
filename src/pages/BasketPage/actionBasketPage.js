import { redirect } from 'react-router-dom'
import { POST_ORDERS_API } from '../../api/apiFakeStore.js'
import postData from '../../helpers/postData.js'

const actionBasketPage = async ({ request }) => {
  const formData = await request.formData()
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    data: formData.get('data'),
    userId: Date.now(),
  }

  await postData({ url: POST_ORDERS_API, data })

  console.log(data)
  return redirect('/ready')
}

export default actionBasketPage
