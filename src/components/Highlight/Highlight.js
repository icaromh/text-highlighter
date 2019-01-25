import React from 'react'
import PropTypes from 'prop-types'

const Highlight = ({ data }) => (
  <mark className="Hightlight" style={{ backgroundColor: data.color }}>
    {data.sentence}
  </mark>
)

Highlight.propTypes = {
  data: PropTypes.shape({
    sentence: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    head: PropTypes.number.isRequired,
    tail: PropTypes.number.isRequired,
  }).isRequired,
}

export default Highlight
