import { Box, Button, Modal, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { CLOSE_MODAL } from '../../reducer/modalReducer.js'
import { useDispatchModal, useStateModal } from '../../store/useStore.js'
import styles from './Popup.styles.js'

const rootModal = document.getElementById('modal')

const Popup = ({ children }) => {
  const dispatchModal = useDispatchModal()
  const stateModal = useStateModal()

  const handleCloseModal = () => {
    dispatchModal({ type: CLOSE_MODAL })
  }

  return (
    <Modal open={stateModal} aria-labelledby="modal-title" aria-describedby="modal-description" container={rootModal}>
      <Box sx={styles.container}>
        <Typography id="modal-title" variant="h6" component="h2">
          Place an order
        </Typography>
        <Box id="modal-description" sx={styles.boxChildren}>
          {children}
        </Box>
        <Box sx={styles.boxBtn}>
          <Button onClick={handleCloseModal} variant="contained" color="primary">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Popup
