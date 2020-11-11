import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

import { getUserDetails } from '../actions/userActions'
import Loader from '../components/Loader'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const userLogin = useSelector((state) => state.userLogin)

  const { user, loading, error } = userDetails
  const { userInfo } = userLogin

  useEffect(() => {
    // we set userInfo to be null if the user is not logged.
    // this will trigger the redirect
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, userInfo, dispatch, user])

  const submitHandler = (e) => {
    e.preventDefault()
    // DISPATCH REGISTER

    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      // DISPATCH UPDATE PROFILE
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label> Enter Your Name </Form.Label>
            <Form.Control
              type="name"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label> Enter Your Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label> Enter Your password </Form.Label>
            <Form.Control
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirm Password">
            <Form.Label> Confirm Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="enter your confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My order</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen
