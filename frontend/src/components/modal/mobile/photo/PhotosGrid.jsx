import React from 'react';
import styled from 'styled-components';
import Flex from '../../../styled-components/Flex';

const PhotosGrid = (props) => (
  <Flex>
    <Container>
      <Grid>
        {props.big && (
          <GridBigItem>
            <Img src={props.big} alt={'house'} />
          </GridBigItem>
        )}
        {props.left && (
          <GridSmallItemLeft>
            <Img src={props.left} alt={'house'} />
          </GridSmallItemLeft>
        )}
        {props.right && (
          <GridColumnSmallRight>
            <Img src={props.right} alt={'house'} />
          </GridColumnSmallRight>
        )}
      </Grid>
    </Container>
  </Flex>
);

const Container = styled.section`
  max-height: 870px;
  max-width: 857px;
  margin-bottom: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
`;

const GridBigItem = styled.div`
  max-height: 575px;
  grid-column: 1 / -1;
  cursor: pointer;
`;

const GridSmallItemLeft = styled.div`
  grid-column: 1 / 2;
  cursor: pointer;
`;

const GridColumnSmallRight = styled.div`
  grid-column: 2 / 3;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default PhotosGrid;
