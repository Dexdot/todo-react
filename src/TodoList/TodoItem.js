import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const ButtonRemove = styled.button`
  margin-left: auto;
`;

const TodoItem = ({ text, removeTodo }) => {
  return (
    <ItemContainer>
      <p>{text}</p>
      <ButtonRemove type="button" onClick={() => removeTodo(text)}>
        Remove
      </ButtonRemove>
    </ItemContainer>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;
