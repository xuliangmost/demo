import createReducer from './createReducer'

describe('createReducer', () => {
  it('supports reducer handler dispatch', () => {
    const reducer = createReducer(0, {
      ADD (state, action) {
        return state + action.payload
      }
    });

    expect(reducer(undefined, {type: 'ADD', payload: 2})).toBe(2);
  });

  it('returns initial/current state for invalid action object', () => {
    const reducer = createReducer('init', {
      SET () {
        return 'changed'
      }
    });

    expect(reducer(undefined, null)).toBe('init');
    expect(reducer('state', {})).toBe('state');
  });

  it('ignores inherited handler names and avoids prototype pollution', () => {
    const handlers = Object.create({POLLUTED: () => 'bad'});
    handlers.OK = () => 'good';
    const reducer = createReducer('init', handlers);

    expect(reducer(undefined, {type: 'OK'})).toBe('good');
    expect(reducer(undefined, {type: 'POLLUTED'})).toBe('init');
  });
});
