import {
  COPY_CMD,
  HIGHLIGHT_CMD,
  SELECT_ALL_CMD,
} from '../constants/commands'

export const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT'
export const COPY_DOCUMENT = 'COPY_DOCUMENT'

const exec = (cmd, param = null) => {
  document.execCommand('styleWithCSS', false);
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
    tail
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

export const addHighlight = color => {
  const selectedhighlight = getSelectedHighlight()
  exec(HIGHLIGHT_CMD, color)

  return {
    type: ADD_HIGHLIGHT,
    highlight: {
      ...selectedhighlight,
      color
    }
  }
}

export const copyDocument = (documentRef) => {
  documentRef.focus()
  exec(SELECT_ALL_CMD)
  exec(COPY_CMD)

  dispatch({
    type: COPY_DOCUMENT,
  })
}
