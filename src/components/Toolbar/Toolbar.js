import React from 'react'
import PropTypes from 'prop-types'


const Toolbar = ({ children }) => (
  <div className="Toolbar">
    {children}
  </div>
)

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Toolbar
