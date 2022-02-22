import {Actiontypes} from '../constants/action-types'
const initialState = {
   products:[],
   cart:[]
}

 export const getTotal = (cart) => cart.reduce((total,item) =>total + item.price,0);

export const productReducer = (state = initialState,action) =>{
  switch(action.type){
      case Actiontypes.SET_PRODUCTS:
          return{
             ...state,products:action.payload
          };
     case Actiontypes.ADD_TO_CART:
         return{
             ...state,
             cart:[...state.cart,action.payload]
         }
    case Actiontypes.REMOVE_FROM_CART:
      return{
        ...state,
         cart:[...state.cart.filter((item) =>item.id !== action.payload)]
    }
      default:
        return state;
  }
    
}