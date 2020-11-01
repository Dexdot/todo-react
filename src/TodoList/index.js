import React, { Component } from 'react';
import TodoItem from './TodoItem';
import styles from './Todo.module.css';

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
      <div className={styles.container}>
        <h1>Todo list</h1>
        <form className={styles.todo} onSubmit={onSubmit}>
          <input
            className={styles.field}
            type="text"
            placeholder="Type todo..."
            value={value}
            onChange={handleChange}
          />
          <button className={styles.btn} type="submit">
            Add
          </button>
        </form>

        <ul className={styles.list}>
          {list.map(({ text }) => (
            <TodoItem key={text} text={text} removeTodo={this.removeTodo} />
          ))}
        </ul>

        <button
          className={styles.clear}
          type="button"
          onClick={this.removeAll}
          disabled={list.length <= 0}
        >
          Clear list
        </button>
      </div>
    );
  }
}
