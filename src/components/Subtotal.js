import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../redux/reducers/productsReducer';

function Subtotal({ cart }) {
  return (
    <SubtotalContainer>
        <SubtotalContents>
            <CurrencyFormat
            renderText={value => <TotalContent>
                <h2>CART SUMMARY</h2>
                <Total>
                <div><h4>Subtotal({cart.length} items) : </h4></div>
                <div><h4>{value}</h4></div>
                </Total>
                <Total>
                <div><h4>Grand Total :</h4></div>
                <div><h4>{value}</h4></div>
                </Total>
                </TotalContent> }
                decimalScale={2}
                prefix="$"
                thousandSeparator={true}
                displayType={'text'}
                value={getTotal(cart)}
                    /> 
                <OrderContent>
                    <h3>Order Delivery:</h3>
                    <ul>
                        <li><p>Completed within 3hrs for orders placed before 3PM</p></li>
                        <li><p>Saturday - Delivery is between 8AM and 12PM</p></li>
                        <li><p>Sunday and Public Holidays - Delivery on Next-Business-Day</p></li>
                        <li><p>Outside Nairobi - Delivery on Next-Business-Day</p></li>
                    </ul>
                </OrderContent>
                <TotalButton><button>Proceed To Checkout</button></TotalButton>
        </SubtotalContents>         
    </SubtotalContainer>
  )
}

export default Subtotal;

const SubtotalContainer = styled.div`
background:#f7f7f7;
height:100%;
display:flex;
align-items:start;
margin:10px;
`
const SubtotalContents = styled.div`
padding:15px;
`
const TotalContent = styled.div`
`
const OrderContent = styled.div`
margin:20px 0 50px 0;
`
const Total = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:5px 0;
padding:8px 0;
`
const TotalButton = styled.div`
display:flex;
justify-content:center;
button{
    padding:8px 16px;
    border-radius:10px;
    width:80%;
    background:#f77426;
    color:#fff;
    &:hover{
        background:#FF8C00;
    }
  }
`