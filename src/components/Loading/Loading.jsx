import React from 'react';

import logo from '../../assets/images/Super_Smash_Bros._Ultimate_logo.png'
import loading from '../../assets/images/loading.gif'
import { Body, Container, Logo } from './styles';

function Loading() {
  return <Container>
      <Body>
          <Logo src={logo} alt="" />
          <Logo src={loading} alt="" />
      </Body>
  </Container>;
}

export default Loading;