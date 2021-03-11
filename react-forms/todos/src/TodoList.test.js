import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it('adds new todo', () => {
  const {queryByText, getByLabelText} = render(<TodoList />);
  expect(queryByText('X')).not.toBeInTheDocument();
  expect(queryByText('eat')).not.toBeInTheDocument();

  const todo = getByLabelText("Todo:");
  const submit = queryByText('Create New Todo')

  fireEvent.change(todo, {target: {value: 'eat'}});
  fireEvent.click(submit);

  expect(queryByText('X')).toBeInTheDocument();
  expect(queryByText('eat')).toBeInTheDocument();
})

it('removes todo', () => {
  const {queryByText, getByLabelText} = render(<TodoList />);
  expect(queryByText('X')).not.toBeInTheDocument();
  expect(queryByText('eat')).not.toBeInTheDocument();

  const todo = getByLabelText("Todo:");
  const submit = queryByText('Create New Todo')

  fireEvent.change(todo, {target: {value: 'eat'}});
  fireEvent.click(submit);

  expect(queryByText('X')).toBeInTheDocument();
  expect(queryByText('eat')).toBeInTheDocument();

  const remove = queryByText('X');
  fireEvent.click(remove);

  expect(queryByText('X')).not.toBeInTheDocument();
  expect(queryByText('eat')).not.toBeInTheDocument();
})