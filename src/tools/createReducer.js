export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    const actionType = action && action.type;
    if (Object.prototype.hasOwnProperty.call(handlers, actionType)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
