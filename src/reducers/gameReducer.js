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
        console.log(action.payload)
        console.log(state)
       // console.log(action.payload)
        return state = action.payload ;
        
        // return {
        //   ...state,
        //   id: action.payload.id,
        //   currPlayer: action.payload.currPlayer,
        //   winStatus: action.payload.winStatus,
        //   winnerName: action.payload.winnerName,
        //   timeStamp: action.payload.timeStamp,
        //   saved: false
          
        // }
        
      case 'GET_ONE_GAME':
        console.log(action.payload)
        console.log(state);

        return state = action.payload;
      case 'UPDATE_GAME':
        return {...state , 
    
          saved: true}
          
      default:
        return state;
    }
  };

  export default gameReducer;