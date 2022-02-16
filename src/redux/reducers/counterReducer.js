

export const counterReducer = (state={counter:0},action) =>{
    switch(action.type){
        case"increment":
          return {
            counter:state.counter + 1
          }
          case"decrement":
          return {
            counter:state.counter - 1
          }
          case"increment_by_5":
             return{
                 counter:state.counter + action.payload
             }
          default:
              return state;
   }
    }