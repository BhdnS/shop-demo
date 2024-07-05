import axios from 'axios'

const postData = async ({ url, data }) => {
  try {
    const response = await axios.post(url, data)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}: ${error.response.statusText}`)
    }

    throw new Error('Request failed: Network Error')
  }
}

export default postData
