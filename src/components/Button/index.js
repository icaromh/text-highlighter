import React from 'react'

import {
  CopyIcon,
  MarkIcon
} from '../Icons'


export const MarkButton = ({ onClick, color }) => (
  <Button
    title="Hightlight a sentence in the document"
    onClick={onClick}
  >
    <MarkIcon color={color} />
  </Button>
)

const Button = ({ children, onClick, title }) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className="Toolbar__button"
    >
      {children}
    </button>
  )
}

export default Button
