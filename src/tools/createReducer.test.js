import createReducer from './createReducer';

describe('createReducer', () => {
  it('returns initial state when action is missing', () => {
    const reducer = createReducer('init', {});
    expect(reducer(undefined)).toBe('init');
  });

  it('supports handlers objects without prototype', () => {
    const handlers = Object.create(null);
    handlers.SET_VALUE = (state, action) => action.payload;
    const reducer = createReducer('init', handlers);
    expect(reducer(undefined, {type: 'SET_VALUE', payload: 'next'})).toBe('next');
  });

  it('returns current state for unknown action', () => {
    const reducer = createReducer('init', {
      SET_VALUE (state, action) {
        return action.payload;
      }
    });
    expect(reducer('current', {type: 'UNKNOWN'})).toBe('current');
  });
});
