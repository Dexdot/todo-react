import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  max-width: 100%;
  padding: 40px 24px;
  border: 1px solid #ddd;

  h1 {
    margin-bottom: 24px;
  }

  @media (max-width: 500px) {
    margin: 0 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Field = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
`;

export const ButtonAdd = styled.button`
  margin-left: 16px;
`;

export const ButtonClear = styled.button`
  margin-top: 8px;
  font-size: 12px;

  &:disabled {
    opacity: 0.4;
  }
`;
