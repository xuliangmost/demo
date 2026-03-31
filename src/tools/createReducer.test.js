import createReducer from './createReducer'

describe('createReducer', () => {
  const reducer = createReducer('init', {
    SET_VALUE (state, action) {
      return action.payload
    }
  })

  test('returns initial state for undefined action', () => {
    expect(reducer(undefined, undefined)).toBe('init')
  })

  test('returns current state for action without type', () => {
    expect(reducer('current', {})).toBe('current')
  })

  test('handles known action type', () => {
    expect(reducer('current', {type: 'SET_VALUE', payload: 'next'})).toBe('next')
  })
})
