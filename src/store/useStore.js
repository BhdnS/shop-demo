import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import basketReducer from '../reducer/basketReducer.js'
import popupReducer from '../reducer/modalReducer.js'

const useStore = create(
  devtools((set) => ({
    basket: [],
    basketLength: 0,
    modal: false,
    dispatchBasket: (action) =>
      set(
        (state) => {
          const newBasket = basketReducer(state.basket, action)
          return {
            basket: newBasket,
            basketLength: newBasket.length,
          }
        },
        false,
        action.type,
      ),
    modalDispatch: (action) =>
      set(
        (state) => ({
          modal: popupReducer(state.modal, action),
        }),
        false,
        action.type,
      ),
  })),
)

export const useStateBasket = () => useStore((state) => state.basket)
export const useBasketLength = () => useStore((state) => state.basketLength)
export const useDispatchBasket = () => useStore((state) => state.dispatchBasket)

export const useStateModal = () => useStore((state) => state.modal)
export const useDispatchModal = () => useStore((state) => state.modalDispatch)
