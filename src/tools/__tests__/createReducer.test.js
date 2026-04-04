import createReducer from '../createReducer';

describe('createReducer', () => {
  it('should handle known action and fallback state', () => {
    const reducer = createReducer(1, {
      ADD: (state, action) => state + action.payload,
    });

    expect(reducer(undefined, {type: 'ADD', payload: 2})).toBe(3);
    expect(reducer(3, {type: 'UNKNOWN'})).toBe(3);
  });

  it('should not throw when action is undefined', () => {
    const reducer = createReducer('init', {});
    expect(() => reducer('state')).not.toThrow();
    expect(reducer('state')).toBe('state');
  });
});
