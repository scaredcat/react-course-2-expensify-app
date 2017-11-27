import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '3',
    description: 'Watermelon',
    note: 'Fresh',
    amount: 405,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
  const updates = {
    amount: 10600
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], { ...expenses[2], ...updates} ]);
});

test('should not edit expense if expense not found', () => {
  const updates = {
    id: '4',
    description: 'Fish',
    note: '',
    amount: 880,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
