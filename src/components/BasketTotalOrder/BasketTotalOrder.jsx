import { Box, Button, Divider, Typography } from '@mui/material'
import totalOrderValue from '../../helpers/totalOrderValue.js'
import { OPEN_MODAL } from '../../reducer/modalReducer.js'
import { useDispatchModal, useStateBasket } from '../../store/useStore.js'
import styles from './BasketTotalOrder.styles.js'

const BasketTotalOrder = () => {
  const basketState = useStateBasket()
  const modalDispatch = useDispatchModal()

  const handleOpenModal = () => {
    modalDispatch({ type: OPEN_MODAL })
  }

  const totalValue = totalOrderValue(basketState)

  return (
    <>
      <Divider sx={styles.divider} />
      <Typography variant="h5" component="div" sx={styles.title}>
        <span>Total Order Value:</span>
        <Box sx={styles.box}>
          <span>{totalValue} $</span>
          <Button onClick={handleOpenModal} variant="contained" color="primary">
            Buy
          </Button>
        </Box>
      </Typography>
    </>
  )
}

export default BasketTotalOrder
