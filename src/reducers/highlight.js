import {
  ADD_HIGHLIGHT
} from '../actions'

const initialState = []

export function highlights(state = initialState, action) {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      const highlights = state.concat(action.highlight)
      return highlights.sort((el, next) => (el.head < next.head ? -1: 0))
    default:
      return state
  }
}
