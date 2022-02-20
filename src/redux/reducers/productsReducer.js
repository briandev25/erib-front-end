import {Actiontypes} from '../constants/action-types'
const initialState = {
   products:[]
}

export const productReducer = (state = initialState,action) =>{
  switch(action.type){
      case Actiontypes.SET_PRODUCTS:
          return{
             ...state,products:action.payload
          }
  }

    return state;
}