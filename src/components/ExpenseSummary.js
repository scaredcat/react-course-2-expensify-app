import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpenseSummary = props => {
  if (props.expensesCount === 0) {
    return null;
  }
  return (
    <div>
      Viewing {props.expensesCount} {props.expensesCount > 1 ? 'expenses' : 'expense'} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </div>
  );
};

const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
