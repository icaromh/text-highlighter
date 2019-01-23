import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, children }) => (
  <div className="Header">
    <h1 className="Header__title">{title}</h1>
    {children}
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Header
