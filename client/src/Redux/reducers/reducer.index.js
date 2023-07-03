import { XXXXXXXX } from "../actionsType/actions.index"

const initialState = {
  xsxsxsx: [],
  mostPopularsTv: []
}


export function rootReducer(state=initialState, action){
  switch (action.type) {
    case XXXXXXXX:
      return{
        ...state,
        xsxsxsx: action.payload
      }

    default:
      return state
  }
}
