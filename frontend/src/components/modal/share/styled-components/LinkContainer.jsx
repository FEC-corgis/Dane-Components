import styled from 'styled-components';

export default styled.div`
  width: ${(props) => (props.width > 743 ? '312px' : '100%')}
  height: 76px;
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
`;
