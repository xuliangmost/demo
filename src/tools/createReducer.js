export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (!action || typeof action.type === 'undefined') {
      return state
    }
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
