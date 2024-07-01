import { Container, Typography } from '@mui/material'
import { Form } from 'react-router-dom'
import FormBasket from '../../components/FormBasket'
import Popup from '../../components/Popup'
import BasketContainer from '../../componentsUI/BasketContainer'
import {
  useBasketLength,
  useStateBasket,
  useStateModal,
} from '../../store/useStore.js'
import styles from './BasketPage.styles.js'

const BasketPage = () => {
  const basketState = useStateBasket()
  const modalState = useStateModal()
  const basketLength = useBasketLength()

  return (
    <Container component='main' maxWidth='lg' sx={styles.container}>
      <Typography variant='h4' component='h1' gutterBottom>
        Shopping Cart: {basketLength === 0 && 'no purchases have been made'}
      </Typography>
      {!!basketLength && <BasketContainer basketState={basketState} />}
      {modalState && (
        <Popup>
          <Form method={'POST'} action={'/basket'}>
            <FormBasket data={JSON.stringify(basketState)} />
          </Form>
        </Popup>
      )}
    </Container>
  )
}

export default BasketPage
