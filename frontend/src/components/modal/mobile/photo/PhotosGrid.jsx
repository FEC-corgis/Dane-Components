import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../photos/styles';

const PhotosGrid = (props) => {
  return (
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
};

const Container = styled.section`
  height: 642px;
  width: 632px;
  margin-bottom: 8px;
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
`;

const GridSmallItemLeft = styled.div`
  grid-column: 1 / 2;
`;

const GridColumnSmallRight = styled.div`
  grid-column: 2 / 3;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default PhotosGrid;
