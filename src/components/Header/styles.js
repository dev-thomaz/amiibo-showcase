import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
     background-color: #000;
     position: fixed;
   
    z-index: 1000;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:20px;
  right:0;
  left:0;
  @media only screen and (max-width: 991px){
      justify-content:center
  }
`;

export const Logo = styled.img`
width:150px;
filter:invert(1);
`

export const Li = styled(Link)`
text-decoration:none;
color: #655;
font-weight: bold;
`

export const Ul = styled.ul`
text-decoration:none;
list-style:none;
`

