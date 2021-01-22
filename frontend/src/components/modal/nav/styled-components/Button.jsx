import styled from 'styled-components';
import CloseButtonContainer from './CloseButtonContainer';

export default styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;

  ${CloseButtonContainer}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;
