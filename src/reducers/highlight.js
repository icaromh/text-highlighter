import {
  ADD_HIGHLIGHT,
  TOGGLE_FILTER_HIGHLIGHT,
} from '../constants/actions'

const sortHightlights = (a, b) => {
  if (a.head > b.head) {
    return 1
  }
  if (a.head < b.head) {
    return -1
  }
  return 0
}

export const highlights = (state = [], action) => {
  switch (action.type) {
    case ADD_HIGHLIGHT:
      return state
        .concat(action.highlight)
        .sort(sortHightlights)

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
