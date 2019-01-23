import React from 'react'

import {
  CopyIcon,
  MarkIcon
} from '../Icons'

import {
  COLOR_1,
  COLOR_2,
  COLOR_3,
} from '../../constants'

const Button = ({children, onClick, title}) => {
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

const markText = (color) => {
  document.execCommand('styleWithCSS', false);
  document.execCommand('hiliteColor', false, color)
}

const copyText = (color) => {
  document.querySelector('.Editor__content').focus()

  document.execCommand('selectAll', false)
  document.execCommand('copy', false)

  const selection = window.getSelection()
  if (selection) {
    window.getSelection().removeAllRanges()
  }
}


const Toolbar = () => (
  <nav className="Toolbar">
    <Button title="Hightlight a sentence in the document" onClick={() => markText(COLOR_1)}>
      <MarkIcon color={COLOR_1} />
    </Button>
    <Button title="Hightlight a sentence in the document" onClick={() => markText(COLOR_2)}>
      <MarkIcon color={COLOR_2} />
    </Button>
    <Button title="Hightlight a sentence in the document" onClick={() => markText(COLOR_3)}>
      <MarkIcon color={COLOR_3} />
    </Button>

    <Button title="Copy the document as showed" onClick={() => copyText()}>
      <CopyIcon />
    </Button>
  </nav>
)

export default Toolbar
