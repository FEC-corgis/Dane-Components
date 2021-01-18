import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  max-width: 1130px;
  max-height: 53vh;
  min-height: 300px;
`;
