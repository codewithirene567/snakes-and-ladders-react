import { combineReducers } from "redux";
import gameReducer from './gameReducer'
import playerReducer from './playerReducer'

 const rootReducer = combineReducers({
    gameReducer,
    playerReducer
  })

  export default rootReducer
//player reducer points to array of players
//putting them in a reducer