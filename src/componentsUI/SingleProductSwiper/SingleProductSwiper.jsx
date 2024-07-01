import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './SingleProductSwiper.styles.js'

const SingleProductSwiper = ({ images }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      className='mySwiper'
      style={styles.swiper}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Product Image ${index + 1}`}
            style={styles.swiperSlide}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

SingleProductSwiper.propTypes = {
  images: PropTypes.array.isRequired,
}

export default SingleProductSwiper
