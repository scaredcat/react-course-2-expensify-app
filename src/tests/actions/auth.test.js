import {
  login,
  logout
} from '../../actions/auth';

test('should create login action', () => {
  const uid = '3yuinjkfhewohy3uh32uil7owayfhajkl';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should create log out action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
