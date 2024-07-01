const totalOrderValue = (data) =>
  data.reduce((acc, v) => {
    return (acc += v.count * v.price)
  }, 0)

export default totalOrderValue
