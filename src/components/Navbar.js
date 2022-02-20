import React,{ useState } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

function Navbar() {
  const [navbar,setNavbar] = useState(false);
 const cart = useSelector(state =>state.cart);
  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
       <NavContainer change={navbar}>
            <NavLogo>
                 <a href="#"><img src='/images/my-logo.png'/></a>
            </NavLogo>
            <SearchBox>
                    <SearchInput placeholder='What are you looking for' />
                    <div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    
            </SearchBox>
            <LeftMenu>
                 <MenuItem change={navbar}>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span>Account</span>
                 <Submenu>
                  <span><a href='#'>Sign-In</a></span>
                  <span><a href='#'>Create an account</a></span>
                 </Submenu>
                 </MenuItem>
                 <MenuItem change={navbar}>
                 <i class="fa fa-heart" aria-hidden="true"></i>
                 <span>Liked</span>
                 </MenuItem>
                   <NavBarMenuItem change={navbar}  >
                   <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span>{cart.length}</span>
                   </NavBarMenuItem>
            </LeftMenu>
            <BurgerMenu>
            <i class="fa fa-bars" aria-hidden="true"></i>
            </BurgerMenu>
            <SemiNavBar change={navbar}>
               <SemiNavBarMenu>
                    <SemiNavbarItem>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                      <span>Caregories</span> 
                    </SemiNavbarItem>
                    <SemiNavbarItem>
                      <i class="fas fa-mobile-alt"></i>
                      <span>App Download</span> 
                    </SemiNavbarItem>
                    <SemiNavbarItem>
                    <i class="far fa-star"></i>
                    <span>Sell on ECIB</span>
                    </SemiNavbarItem>
                    <SemiNavbarItem>
                    <span>Help</span>
                    <i class="fas fa-caret-down"></i>
                    </SemiNavbarItem>
               </SemiNavBarMenu>
            </SemiNavBar>
       </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.div`
   height:${props => props.change ?"70px" :'80px'};
   background:${props => props.change ?"#fff" :'transparent'};
   width:100%;
   position:fixed;
   padding: 0 45px;
   display:flex;
   z-index:50;
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
  height:100%;
  @media(max-width:768px){
    display:none;
  }
`
const MenuItem = styled.div`
height:100%;
display:flex;
align-items:center;
 cursor:pointer;
 margin:0 8px;
 padding: 0 8px;
 position:relative;
 span{
   margin-left:8px;
   font-size:18px;
   color:${props => props.change ?"#000" :'#fff'};
 }
 i{
   font-size:18px;
   color:${props => props.change ?"#000" :'#999999'};
 }
 &:hover{
    span{
      color:#f77426;
    }
   i{
    color:#f77426;
   }
   div{
    display:flex;
    justify-content:center;
    flex-direction:column;
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
const Submenu = styled.div`
   display:none;
   background:#fff;
   box-shadow: -2px 11px 23px 5px rgba(0,0,0,0.38);
-webkit-box-shadow: -2px 11px 23px 5px rgba(0,0,0,0.38);
-moz-box-shadow: -2px 11px 23px 5px rgba(0,0,0,0.38);
border-radius: 0 0 5px 5px;
   position:absolute;
   left:0;
   top:100%;
   z-index:9999;
    span{
      width:200px;
      text-align:center;
      font-size:18px;
      border:1px solid rgba(0,0,0,0.2);
      padding:5px 20px;
      margin:0 10px 20px;
      border-radius:9999px;
        &:nth-child(1){
           margin-top:20px;
           background:#f77426;
        }
       a{
         text-decoration:none;
         color:#000;
       }
    }
`

const SemiNavBar = styled.div`
background:#fff;
border-top:1px solid lightgray;
position:absolute;
height:40px;
top:100%;
left:0;
right:0;
display:${props => props.change ?"flex" :'none'};
align-items:center;
`
const SemiNavBarMenu = styled.div`
  display:flex;
    div{
      padding:20px;
       span{
         margin-left:7px;
         font-size:18px;
       }
       i{
        margin-left:7px;
       }
    }
`
const SemiNavbarItem = styled.div`
 cursor:pointer;
   &:hover{
     span{
      color:#f77426;
     }
     i{
      color:#f77426;
     }
   }
`
const NavBarMenuItem = styled(MenuItem)`
     position:relative;
     &:hover{
       span{
          color:#000; 
       }
    }
     span{
      position:absolute;
      top:22%;
      right:0;
     left:60%;
     width:15px;
     height:15px;
     border-radius:50%;
     background:#f77426;
     display:flex;
     align-items:center;
     justify-content:center;
     padding:13px;
     color:#fff;
     }
    
// `