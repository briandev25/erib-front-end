import React,{ useEffect,useState} from 'react';
import{ setProducts } from '../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import CardItem from './Card';

function Categories() {
  const products = useSelector(state =>state.products)
  const dispatch = useDispatch();


  const fetchProducts = async() =>{
      await axios.get('https://fakestoreapi.com/products').then(
         (response) =>{
           dispatch(setProducts(response.data));
            
         }
       ).catch((err) =>{
         console.log(err);
       })
  }

   useEffect(() =>{
       fetchProducts()
   });


   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
        <CategoriesContainer>
          <h1>JUST FOR YOU</h1>
              <Slider {...settings}>
             { products.map((product) =>( 
           <CardItem
           category={product.category}
           description = {product.description}
           key ={product.id}
           id ={product.id} 
           image ={product.image}
           price = {product.price}
           title ={product.title}
            />) )
       }
              </Slider>
        </CategoriesContainer>
  )
}

export default Categories;

const CategoriesContainer = styled.div`
margin-top:75px;
padding:0 30px;
` 