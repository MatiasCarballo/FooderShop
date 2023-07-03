import { GET_PRODUCT } from "../actionsType/actionsType"

const initialState = {
  product: []
  
}


export function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_PRODUCT:
      return{
        ...state,
        product: action.payload
      }

    default:
      return state
  }
}
