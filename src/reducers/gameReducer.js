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
   
      default:
        return state;
    }
  };

  export default gameReducer;

