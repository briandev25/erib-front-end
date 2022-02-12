import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
       <NavContainer>
            <NavLogo>
                 <a href="#"><img src='/images/my-logo.png'/></a>
            </NavLogo>
            <SearchBox>
                    <SearchInput />
                    <div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    
            </SearchBox>
            <LeftMenu>
                 <MenuItem>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span>Account</span>
                 </MenuItem>
                 <MenuItem>
                 <i class="fa fa-heart" aria-hidden="true"></i>
                 <span>Liked</span>
                 </MenuItem>
                   <MenuItem>
                   <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                   <span>Cart</span>
                   </MenuItem>
            </LeftMenu>
            <BurgerMenu>
            <i class="fa fa-bars" aria-hidden="true"></i>
            </BurgerMenu>
       </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.div`
   height:70px;
   background:#fff;
   width:100%;
   position:fixed;
   padding: 0 45px;
   display:flex;
   align-items:center;
   @media(max-width:768px){
     justify-content:space-between;
     padding:0;
   }
   
`
const NavLogo = styled.div`
height:100%;
   img{
    height:100%;
    width:200px;
   }
`
const SearchBox = styled.div`
   flex:1;
   display:flex;
   align-items:stretch;
   justify-content:center;
   div{
    background:#f77426;
    padding:8px 15px;
    color:#fff;
    display:flex;
    border-radius:0 9999px 9999px 0;
    align-items:center;
    justify-content:center;
  }
`
const SearchInput = styled.input`
border-top:    2px solid red;
  border-left:  2px solid red; 
  border-bottom: 2px solid red;
border-color:#f77426;
display:flex;
align-items:center;
justify-content:end;
width:80%;
border-radius:9999px 0 0 9999px;
background-color:#fff;
padding:10px 5px;

`
const LeftMenu = styled.div`
  display:flex;
  @media(max-width:768px){
    display:none;
  }
`
const MenuItem = styled.div`
 cursor:pointer;
 margin:0 8px;
 padding: 0 8px;
 span{
   margin-left:8px;
   font-size:18px;
 }
 i{
   font-size:18px;
   color:#999999;
 }
 &:hover{
   color:#f77426;
   i{
    color:#f77426;
   }
 }
`
const BurgerMenu = styled.div`
font-size:18px;
 display:none;
 @media(max-width:768px){
  display:block;
  padding:0 15px;
}
`