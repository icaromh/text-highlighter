import React from 'react'
import PropTypes from 'prop-types'

const HighlightsList = ({ children }) => (
  <section className="HighlightsList">
    {children}
  </section>
)

HighlightsList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HighlightsList
