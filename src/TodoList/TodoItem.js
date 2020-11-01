import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({ text, removeTodo }) => {
  return (
    <div className={styles.item}>
      <p>{text}</p>
      <button
        className={styles.remove}
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
