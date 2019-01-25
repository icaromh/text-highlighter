import {
  COPY_CMD,
  HIGHLIGHT_CMD,
} from '../constants/commands'

import {
  ADD_HIGHLIGHT,
  COPY_DOCUMENT,
  TOGGLE_FILTER_HIGHLIGHT,
} from '../constants/actions'

const exec = (cmd, param = null) => {
  document.execCommand('styleWithCSS', false)
  document.execCommand(cmd, false, param)
}

const getHeadNTail = (selection) => {
  let head = selection.anchorOffset
  let tail = selection.extentOffset

  if (head > tail) {
    head = selection.extentOffset
    tail = selection.anchorOffset
  }

  return {
    head,
    tail,
  }
}

const getSelectedHighlight = () => {
  const selection = window.getSelection()
  const { head, tail } = getHeadNTail(selection)

  return {
    sentence: selection.toString(),
    head,
    tail,
  }
}

export const addHighlight = (color) => {
  const selectedhighlight = getSelectedHighlight()
  exec(HIGHLIGHT_CMD, color)

  return {
    type: ADD_HIGHLIGHT,
    highlight: {
      ...selectedhighlight,
      color,
    },
  }
}

export const copyDocument = () => {
  exec(COPY_CMD)

  return {
    type: COPY_DOCUMENT,
  }
}

export const toggleFilterHighlights = (color, active) => ({
  type: TOGGLE_FILTER_HIGHLIGHT,
  filter: {
    active,
    color,
  },
})
