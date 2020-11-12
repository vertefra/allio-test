import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

import { register } from '../actions/userActions'
import Loader from '../components/Loader'
import { saveShippingAddress } from '../actions/cartActions.js'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => {
    return state.cart
  })

  // pull info from saved shippingAddress in local storage if present
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (ev) => {
    ev.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payments')
  }

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label> Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label> city</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label> postalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your postalCode"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label> country</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
