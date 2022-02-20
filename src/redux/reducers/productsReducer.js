import {Actiontypes} from '../constants/action-types'
const initialState = {
   products:[],
   cart:[]
}

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
      default:
        return state;
  }

    
}