import authReducer from '../../reducers/auth';

test('it should log a user in', () => {
  const uid = '312789ehjkwahf3qoy782q3oyhw';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('it should log a user out', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'e2uy89fhewuifa' }, action);
  expect(state).toEqual({});
});
