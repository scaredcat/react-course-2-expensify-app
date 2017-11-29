import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../../src/components/ExpenseSummary';

test('it should display summary of a single expense', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesCount={1}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('it should display summary of more than one expense', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesCount={2}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
