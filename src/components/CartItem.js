import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useDispatch} from 'react-redux';
import { removeFromCart } from '../redux/actions/productActions'

function CartItem({title,image,price,id}) {
    const dispatch = useDispatch();
  return (
    <Item>
        <ItemImage>
            <img  src ={image}/>
        </ItemImage>
        <ItemDetails>
            <h3>{title}</h3>
            <h4>${price}</h4>
        </ItemDetails>
        <ItemActions>
             <VaryItems>
             <div>-</div>
             <div><span>1</span></div>
             <div>+</div>
             </VaryItems>
             <DeleteItem onClick ={() =>dispatch(removeFromCart(id))} >
                <DeleteIcon />
             </DeleteItem>
        </ItemActions>
    </Item>
  )
}

export default CartItem;

const Item = styled.div`
  background:#fff;
  padding-top:12px;
  width:100%;
  min-height:175px; 
  display:flex; 
  border-bottom:1px solid #C0C0C0;
`
const ItemImage = styled.div`
   width:154px;
   padding:8px;
   height:154px;
   margin-right:15px;
   border:1px solid #707070;
    img{
        height:100%;
        width:100%;
        object-fill:cover;
    }
`
const ItemDetails =styled.div`
display:flex;
flex-direction:column;
align-items:start;
flex:1;
   h3{
       padding:10px;
       font-size:18px;
       line-height:24px;
   }
   h4{
       color:#FF8C00;
   }
`
const ItemActions = styled.div`
min-width:154px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
const VaryItems = styled.div`
width:100%;
display:flex;
justify-content:space-between;

font-size:14px;

 div{
     padding:8px;
     color:#5f6367;
     border:1px solid #C0C0C0;
     margin:3px;
     display:flex;
     align-items:center;
     justify-content:center;
     flex:1;
     border-radius:5px;
 }
 div:nth-child(1),div:nth-child(3){
     cursor:pointer;
     color:#fff;
     border-radius:50%;
 }
 div:nth-child(1){
    background:red;
 }
 div:nth-child(3){
     background:green;
 }
 span{
    color:#000;
}
`
const DeleteItem = styled.div`
color:red;
cursor:pointer;
padding:10px;
margin-bottom:20px;
border-radius:50%;
&:hover{
    background-color:#f7f7f7;
}

`