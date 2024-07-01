import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SingleProductContainer from '../../componentsUI/SingleProductContainer'
import { CLEAR_BASKET } from '../../reducer/basketReducer.js'
import { CLOSE_MODAL } from '../../reducer/modalReducer.js'
import { useDispatchBasket, useDispatchModal } from '../../store/useStore.js'

const ReadyPage = () => {
  const dispatchModal = useDispatchModal()
  const dispatchBasket = useDispatchBasket()

  useEffect(() => {
    dispatchModal({ type: CLOSE_MODAL })
    dispatchBasket({ type: CLEAR_BASKET })
  }, [dispatchBasket, dispatchModal])

  return (
    <SingleProductContainer>
      <Typography variant='h5' gutterBottom>
        Order Successfully Placed!
      </Typography>
      <Typography variant='body1' gutterBottom>
        Your order has been successfully placed! Thank you for your purchase.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We will start processing your order shortly. Expect notifications about
        the status of your order.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If you have any questions or need further assistance, feel free to
        contact our support team.
      </Typography>
      <Button component={Link} to={'/'} variant='contained' color='primary'>
        Back to Home
      </Button>
    </SingleProductContainer>
  )
}

export default ReadyPage
