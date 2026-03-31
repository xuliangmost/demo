import {combineReducers} from 'redux'
import * as indexReducer from './component/index/reducer'

export default combineReducers({
  showValue: indexReducer.showValue
})