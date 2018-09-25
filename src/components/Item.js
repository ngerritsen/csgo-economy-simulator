import React from 'react';
import { Margin } from 'styled-components-spacing';
import styled from 'styled-components';

import { Item as ItemPropType } from '../propTypes';

const Item = ({ item: { name, cost, id } }) => (
  <div>
    <Margin>
      <strong>{name}</strong>
    </Margin>
    <Margin top={1}>
      <ImageContainer>
        <Image src={`/img/weapon-thumbnails/${id}.png`}/>
      </ImageContainer>
    </Margin>
    <Margin top={1}>
      ${cost},-
    </Margin>
  </div>
);

Item.propTypes = {
  item: ItemPropType
};

const Image = styled.img`
  max-width: 100%;
  width: auto;
  max-height: 100%;
`;

const ImageContainer = styled.div`
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Item;
