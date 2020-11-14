import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Container, Form, Field, ButtonAdd, ButtonClear } from './styled';

const localStorageKey = 'list';

export default class TodoList extends Component {
  state = {
    value: '',
    list: []
  };

  componentDidMount() {
    this.setListFromLocalStorage();
  }

  componentDidUpdate(props, prevState) {
    const { list } = this.state;
    const isDifferent = prevState.list.length !== list.length;

    if (isDifferent) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(list));
    }
  }

  handleChange = ({ target }) => {
    this.setState(() => ({ value: target.value }));
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
    this.setState(({ list }) => ({
      list: list.filter(({ text }) => text !== textToRemove)
    }));
  };

  removeAll = () => {
    this.setState({ list: [], value: '' });
  };

  setListFromLocalStorage = () => {
    const listFromStorage = window.localStorage.getItem(localStorageKey);
    const list = listFromStorage ? JSON.parse(listFromStorage) : [];
    this.setState({ list });
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
