import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'

import products from '../products'

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  return (
    <>
      <h1>lastest product</h1>
      <Row>
        {products.map(product => {
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
