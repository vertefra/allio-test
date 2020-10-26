import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('/api/products')
        setProducts(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <>
      <h1>lastest product</h1>
      <Row>
        {products &&
          products.map(product => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default HomeScreen
