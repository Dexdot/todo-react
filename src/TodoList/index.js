import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Container, Form, Field, ButtonAdd, ButtonClear } from './styled';

export default class TodoList extends Component {
  state = {
    value: '',
    list: [],
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.addTodo();
  };

  addTodo = () => {
    const { value, list } = this.state;
    const isValueExists = list.some(({ text }) => text === value);

    if (value !== '' && !isValueExists) {
      this.setState({ value: '', list: [...list, { text: value }] });
    }
  };

  removeTodo = (textToRemove) => {
    const { list } = this.state;
    const newList = list.filter(({ text }) => text !== textToRemove);
    this.setState({ list: newList });
  };

  removeAll = () => {
    this.setState({ list: [], value: '' });
  };

  render() {
    const { state, onSubmit, handleChange } = this;
    const { list, value } = state;

    return (
      <Container>
        <h1>Todo list</h1>
        <Form onSubmit={onSubmit}>
          <Field
            type="text"
            placeholder="Type todo..."
            value={value}
            onChange={handleChange}
          />
          <ButtonAdd type="submit">Add</ButtonAdd>
        </Form>

        <ul>
          {list.map(({ text }) => (
            <TodoItem key={text} text={text} removeTodo={this.removeTodo} />
          ))}
        </ul>

        <ButtonClear
          type="button"
          onClick={this.removeAll}
          disabled={list.length <= 0}
        >
          Clear list
        </ButtonClear>
      </Container>
    );
  }
}
