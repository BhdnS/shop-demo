export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const CLEAR_BASKET = 'CLEAR_BASKET'

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const id = action.payload.id
      const inArray = state.some((item) => item.id === id)

      if (!inArray) {
        const { id, images, price, title } = action.payload

        return [...state, { id, images, price, title, count: 1 }]
      }

      return state.map((v) => (v.id === id ? { ...v, count: v.count + 1 } : v))

    case DELETE_PRODUCT:
      return state.filter((v) => v.id !== action.payload)

    case INCREMENT_COUNT:
      return state.map((v) => (v.id === action.payload ? { ...v, count: v.count + 1 } : v))

    case DECREMENT_COUNT:
      return state.map((v) => (v.id === action.payload ? { ...v, count: v.count - 1 } : v)).filter((v) => v.count > 0)

    case CLEAR_BASKET:
      return []

    default:
      return state
  }
}

export default basketReducer
