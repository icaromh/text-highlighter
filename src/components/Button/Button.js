import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, title }) => (
  <button type="button" title={title} onClick={onClick} className="Button">
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  title: '',
}

export default Button
