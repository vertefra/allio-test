import { Spinner } from 'react-bootstrap'

import React from 'react'

const Loader = () => {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span class="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
