import { combineReducers } from 'redux'

import {
  highlights,
  filter,
} from './highlight'

const rootReducer = combineReducers({
  highlights,
  filter,
})

export default rootReducer
