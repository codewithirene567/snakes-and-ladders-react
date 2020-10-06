const intialState = {
  id: 0,
  currPlayer: 0,
  winStatus: false,
  // allplayers: [],
  winnerName: "",
  timeStamp: "",
 
}



function gameReducer(state = intialState, action) {
    switch (action.type) {
      // case 'CLEAR_GAME_STATE':
      //   return intialState;
      case 'START_SAVE_GAME_REQUEST':
        console.log(action.payload);
        return state;
      case 'GET_THE_GAME':
        
        return action.payload.map((p) => {
            p['allplayers'] = [];
            return {
              ...p
            }
          })
        //made an empty array for allplayers
        
      case 'GET_ONE_GAME':

        return state = action.payload;
       case 'UPDATE_GAME':
         return {...state}
      case 'GET_THE_PLAYERS':
        console.log(state, action.payload)
        if (state.constructor === Array ) { 
        return state.map((game) => {
          console.log(game)
          game['allplayers'] = action.payload;
          console.log(game, game.allplayers)
          return {
            ...game,
            // allplayers: action.payload
          }
        })
        } else {
          return [{
            ...state,
            allplayers: action.payload
          }]
        }
        // return {...state, allplayers: action.payload}
      default:
        return state;
    }
  };

  export default gameReducer;

  // {...state,
  //   allplayers: state.allplayers.map((p) => {
        
  //       if (p.playerId === state.currPlayer) {
  //         console.log(state.allplayers[state.currPlayer].currentPostion + action.payload)

  //         return {
  //           ...p,
  //           currentPostion: Math.min(state.allplayers[state.currPlayer].currentPostion + action.payload, 99)
  //           //if currentPostion line && if the current player 0 !== current ++1
  //         }
  //       }