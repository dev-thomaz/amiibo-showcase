import styled from 'styled-components';

export const Container = styled.div`
position: relative;
width:400px;
height: 250px;
border-radius:20px;
display:flex;
align-items:center;
transition: 0.5s;
margin:20px 10px;
@media(max-width:991px){
   margin:0;
}

&:hover #Circle::before{
  
    background: linear-gradient(135deg, rgba(69,104,220,1) 0%, rgba(176,106,179,1) 76%);
    clip-path: circle(300px at center);

}
:hover img{
    left:28%;
    height:300px;
    @media(max-width:991px){
        top:70%;
        left:50%;
        height:200px; 
}
}

:hover #Content{
    left:55%;
    opacity:1;
visibility:visible;

@media(max-width:991px){
    left:0;
}
}

@media(max-width:991px){
        width:auto;
        max-width:300px;
        align-items:flex-start; 

        :hover{
            height:300px;
        }
}

`;

export const Circle = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
border-radius:20px;
overflow:hidden;

::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#ccc;
    clip-path: circle(120px at center);
    transition: 0.5s;
    @media(max-width:991px){
    clip-path: circle(70px at center);
}
}


`


export const Image = styled.img`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
height:250px;
pointer-events:none;
transition: 0.5s;

@media(max-width:991px){
    height:150px;   
}
`;

export const Content = styled.div`
position:relative;
width:50%;
left:20%;
padding:20px 20px 20px 40px;
transition: 0.5s;
opacity:0;
visibility:hidden;

h2{
    color:#fff;
    text-transform: uppercase;
    font-size:0.8em;
    line-height:1em;
    width:70px;

 
}

@media(max-width:991px){
    width:100%;
    left: 0;
   padding:40px;
}
`

