import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import ItemSelectorContainer from '../containers/ItemSelectorContainer';

const App = () => (
  <Container>
    <Title>CS:GO Economy Simulator</Title>
    <Grid columns={3}>
      <Cell width={2}>
        <ItemSelectorContainer/>
      </Cell>
      <Cell width={1}>
        List
      </Cell>
    </Grid>
  </Container>
);

const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing[2]};
`;

const Title = styled.h1`
  font-size: 1.8em;
  margin-bottom: ${p => p.theme.spacing[4]};
`;

export default App;
