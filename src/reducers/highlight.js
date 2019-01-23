import {
  ADD_HIGHLIGHT,
  FILTER_HIGHLIGHTS,
} from '../constants/actions'

const initialState = []

export const highlights = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return state
        .concat(action.highlight)
        .sort((el, next) => (el.head < next.head ? -1 : 0))

    default:
      return state
  }
}

export const filteredHighlights = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_HIGHLIGHTS:
      return state.filter(() => {

      })
        .sort((el, next) => (el.head < next.head ? -1 : 0))

    default:
      return state
  }
}
