import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'

import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>lastest product</h1>
      <Row>
        {products.map(product => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
