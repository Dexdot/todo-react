import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text, removeTodo }) => {
  return (
    <div className="todo-item">
      <p>{text}</p>
      <button
        className="todo-remove"
        type="button"
        onClick={() => removeTodo(text)}
      >
        Remove
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
