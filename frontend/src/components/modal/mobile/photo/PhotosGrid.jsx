import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../photos/styles';

const PhotosGrid = () => {
  return (
    <Flex>
      <Container>
        <Grid>
          <GridBigItem />
          <GridSmallItemLeft style={{ backgroundColor: 'red' }} />
          <GridColumnSmallRight style={{ backgroundColor: 'green' }} />
        </Grid>
      </Container>
    </Flex>
  );
};

const Container = styled.section`
  height: 642px;
  width: 632px;
`;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 424px 209px;
`;

const GridBigItem = styled.div`
  grid-column: 1 / -1;
  border: 1px solid black;
  background-color: lightblue;
`;

const GridSmallItemLeft = styled.div`
  grid-column: 1 / 2;
  border: 1px solid black;
`;

const GridColumnSmallRight = styled.div`
  grid-column: 2 / 3;
  border: 1px solid black;
`;

export default PhotosGrid;
