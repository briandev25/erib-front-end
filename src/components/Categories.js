import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function Categories() {
  return (
    <CategoriesContainer>
        <Card />
    </CategoriesContainer>
  )
}

export default Categories;

const CategoriesContainer = styled.div`
height:100vh;
` 