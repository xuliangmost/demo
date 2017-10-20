import * as types from './types'

export function clickValue (state) {
  return {
    type: types.SELECT_VALUE,
    payload: state
  }
}