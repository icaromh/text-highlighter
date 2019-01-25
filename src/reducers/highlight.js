import {
  ADD_HIGHLIGHT,
  TOGGLE_FILTER_HIGHLIGHT,
} from '../constants/actions'

export const highlights = (state = [], action) => {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return state
        .concat(action.highlight)
        .sort((el, next) => (el.head < next.head ? -1 : 0))

    default:
      return state
  }
}

export const filter = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FILTER_HIGHLIGHT:
      if (action.filter.active) {
        return state.concat(action.filter.color)
      }
      return state.filter(color => color !== action.filter.color)
    default:
      return state
  }
}
