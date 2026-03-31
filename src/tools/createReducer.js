export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (!action || typeof action !== 'object' || typeof action.type === 'undefined') {
      return state
    }
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
