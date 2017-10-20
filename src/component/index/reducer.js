import * as types from './types'
import createReducer from '../../tools/createReducer'

export const showValue = createReducer(null, {
  [types.SELECT_VALUE] (state, action) {
    return action.payload
  }
});