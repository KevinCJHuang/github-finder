import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const {appName} = props

  return (
    <nav className="navbar bg-dark">
    <h3 className='brand-logo'>
      <i className='fab fa-github'/>
      {appName}
    </h3>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/About'>About</Link>
      </li>
    </ul>
  </nav>
  )
}

Navbar.propTypes = {
  appName: PropTypes.string.isRequired,
};


export default Navbar
