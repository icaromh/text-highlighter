import React from 'react'
import PropTypes from 'prop-types'

import { MarkIcon } from '../Icons'
import Button from './Button'

const MarkButton = ({ onClick, color }) => (
  <Button
    title="Hightlight a sentence in the document"
    onClick={onClick}
  >
    <MarkIcon color={color} />
  </Button>
)

MarkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}

export default MarkButton
