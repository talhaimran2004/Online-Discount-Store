import React from 'react'
import { NavLink } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <NavLink to={'/'}>Go back To Home Page</NavLink>
      <h4>Thank You!</h4>
    </div>
  )
}

export default NoMatch
