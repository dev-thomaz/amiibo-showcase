import React from 'react';

import { Circle, Container, Content, Image } from './styles';

function CharacterSelector({url, name=''}) {
  return <Container>
      <Circle id="Circle"/>
      
      <Content id='Content'>
      <h2>{name}</h2>
      </Content>
      <Image src={url} alt="" />

  </Container>;
}

export default CharacterSelector;