import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer><span>Home</span></HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`

height:100vh;
z-index:-1;
 span{
     color:#fff;
 }
`