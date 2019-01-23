import { combineReducers } from 'redux'

import {
  highlights,
  filteredHighlights,
} from './highlight'

const rootReducer = combineReducers({
  highlights,
  filteredHighlights: highlights,
})

export default rootReducer
