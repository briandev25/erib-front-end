import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Cart() {
    const cart = useSelector(state => state.cart)
  return (
    <CartContainer>
        <CartBox>
            {cart.length > 0 ?<> <CartDetails>
                <h3>Shopping Details</h3>
            </CartDetails>
            <CartItemsDetails>
                <ShoppingCart>
                      {cart.map(item =>(
                          <CartItem
                            image={item.image}
                            price={item.price}
                            title ={item.title}
                            key ={item.id}
                           />
                      ))}
                </ShoppingCart>
                <CartSummary>

                </CartSummary>
            </CartItemsDetails></> :<NoCartItems>
                  <h3>You have no items in cart</h3>
                  <Link to ='/'>
                  <button>Back to Shopping <ArrowForwardIcon /></button>
                  </Link>
                </NoCartItems>}
        </CartBox>
    </CartContainer>
  )
}

export default Cart;

const CartContainer = styled.div`
background:url('/images/cart-background.jpg') center center / cover no-repeat;
min-height:100vh;
display:flex;
justify-content:center;
`
const CartBox = styled.div`

background:#ffffff;
margin-top:85px;
min-height:calc(100vh - 85px);
width:90%;
display:flex;
flex-direction:column;
`
const CartDetails =styled.div`
background:#f7f7f7;
  height:153px;
  display:flex;
  align-items:center;
  justify-content:center;
`
const CartItemsDetails =styled.div`
flex:1;
display:flex;
  
`
const ShoppingCart =styled.div`
margin:15px;
flex:0.7;
`
const CartSummary =styled.div`
flex:0.3;
`
const NoCartItems = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
  h3{
      font-size:24px;
  }
  button{
      background:#f77426;
      color:#fff;
      padding:10px 20px;
      border-radius:20px;
      font-size:16px;
      &:hover{
          background:#FF8C00;
      }
  }
`

