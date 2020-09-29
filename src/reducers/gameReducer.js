const intialState = {
  currPlayer: 0,
  winStatus: false,
  allplayers: [],
  winnerName: "",
  timeStamp: ""

}



function gameReducer(state = intialState, action) {
    switch (action.type) {
      case 'GET_THE_GAME':
        console.log(action.payload)
        console.log(state)
       // console.log(action.payload)
        return action.payload
        
    
   
      default:
        return state;
    }
  };

  export default gameReducer;