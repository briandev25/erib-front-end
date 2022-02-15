import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <HomeContainer>
  <Carousel fade>
    <Carousel.Item>
      <img 
        height={722} 
        className="d-block w-100"
        src="/images/background-images/shoe.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
       height={722} 
        className="d-block w-100"
        src="/images/background-images/fashion3.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height={722} 
        className="d-block w-100"
        src="/images/background-images/utensils.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
height:90vh;
z-index:1;
`