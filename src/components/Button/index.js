import React from 'react'
import PropTypes from 'prop-types'

import {
  MarkIcon,
} from '../Icons'

export const MarkButton = ({ onClick, color }) => (
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

const Button = ({ children, onClick, title }) => (
  <button type="button" title={title} onClick={onClick} className="Toolbar__button">
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
}

Button.defaultProps = {
  title: '',
}

export default Button
