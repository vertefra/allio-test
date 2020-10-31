import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

import { addToCart } from '../actions/cartActions'
import Message from '../components/Message'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => {
    return state.cart
  })

  const { cartItems } = cart

  console.log(productId, qty)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>Your Cart is Empty</Message>
        ) : (
          <ListGroup variant="flush"></ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  )
}

export default CartScreen
