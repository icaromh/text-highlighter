import React from 'react'
import PropTypes from 'prop-types'

import TWITTER_URL_SHARE from '../../constants'

const Highlight = ({ data }) => (
  <p>
    <mark style={{ backgroundColor: data.color }}>
      {data.sentence}
    </mark>

    <a target="_blank" rel="noopener noreferrer" href={TWITTER_URL_SHARE(data.sentence)}>Share</a>

  </p>
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
