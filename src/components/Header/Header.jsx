import React from 'react';

import { Container, Logo } from './styles';
import logo from '../../assets/images/Super_Smash_Bros._Ultimate_logo.png'
function Header() {
  return <Container>
     <Logo src={logo} />
     
  </Container>;
}

export default Header;