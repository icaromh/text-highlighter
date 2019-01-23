import {
  ADD_HIGHLIGHT,
} from '../actions'

const initialState = []

const highlights = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return state
        .concat(action.highlight)
        .sort((el, next) => (el.head < next.head ? -1 : 0))

    default:
      return state
  }
}

export default highlights
