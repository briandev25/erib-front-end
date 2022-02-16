import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components';

function Card() {
const counter = useSelector(state => state.counter);
const dispatch = useDispatch();

  return (
    <CardContainer>
        <img src= '/images/shoes/nike/shoe1.jpg' height={80} width={80}/>
        <p>Counter value is : {counter}</p>
        <button onClick={() =>dispatch({type:"increment"})}>Increment</button>
        <button onClick={() =>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={() =>dispatch({type:'increment_by_5',payload:5})}>Increase by 5</button>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
`