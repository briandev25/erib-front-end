import { Button } from 'bootstrap';
import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {addToCart } from '../redux/actions/productActions'
import styled from 'styled-components';
function CardItem({ image,title,description,category,price,id}) {
   const cart = useSelector(state => state.cart);
   const products = useSelector(state =>state.products)
   const dispatch = useDispatch()
  return (
      <CardContainer>
        <CardImage >
            <img src={image}/>
        </CardImage>
        <CardInfo>
            <h4>{title}</h4>
            <h5>${price}</h5>
            <button onClick ={() => dispatch(addToCart(products.find(product =>product.id == id)))}>Add to basket</button>
        </CardInfo>
      </CardContainer>
  )
}

export default CardItem;


const CardContainer =styled.div`
padding:15px;
display:flex;
flex-direction:column;
cursor:pointer;
border-radius:10px;
height:350px;
width:223px;
background:#fff;
overflow:hidden;
transition:transform 100ms ease-in;
&:hover{
  transform:scale(1.07);
}


`
const CardImage =styled.div`
  overflow:hidden;
  border-radius:10px;
   img{
     object-fit:contain;
     width:100%;
     height:100%;
   }
   flex:0.6;
`
const CardInfo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
 margin-top:5px;
 padding-top:10px;
 flex:0.4;
   h4{
     color:#333333;
     text-align:center;
   }
   h5{
    color:#333333;
    text-align:center;
   }
   button{
     background:#f77426;
     padding:7px;
     border-radius:8px;
     width:90%;
   }
`