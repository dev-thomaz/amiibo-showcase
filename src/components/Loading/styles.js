import styled from 'styled-components';

export const Container = styled.div`
     position: fixed;
   display :flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;
  overflow-x: hidden;
  background-color: rgba(31,32,41,.75);
  pointer-events: none;
  transition: opacity 250ms 700ms ease;
`;

export const Body = styled.div`
 position: relative;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 width:30em;
 height:30em;
  background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199,175,189,.25);
  transform: scale(0.6);
  transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
`

export const Logo = styled.img`
width:200px;
`
