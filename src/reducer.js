import {combineReducers} from 'redux'
import * as indexReducer from './component/index/reducer'

const reducers = Object.keys(indexReducer).reduce((acc, key) => {
  if (typeof indexReducer[key] === 'function') {
    acc[key] = indexReducer[key]
  }
  return acc
}, {})

export default combineReducers(reducers)