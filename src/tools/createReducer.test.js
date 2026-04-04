import createReducer from './createReducer';

describe('createReducer', () => {
  test('calls mapped handler when action type exists', () => {
    const reducer = createReducer(0, {
      INC: (state, action) => state + action.payload
    });

    expect(reducer(1, {type: 'INC', payload: 2})).toBe(3);
  });

  test('ignores inherited keys from Object prototype', () => {
    const handlers = Object.create(null);
    handlers.SAFE = state => state + 1;
    const reducer = createReducer(0, handlers);

    expect(reducer(0, {type: '__proto__'})).toBe(0);
    expect(reducer(0, {type: 'SAFE'})).toBe(1);
  });
});
