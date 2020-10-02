
 const intialState = {
   currPlayer: 0,
   winStatus: false,
   allplayers: [],
   winnerName: "",
   timeStamp: ""

 }
//the reducer that works while the game is in play
function playerReducer(state = intialState, action){
    switch (action.type) {
       case 'ADD_PLAYER':
          return {...state,
            allplayers: state.allplayers.concat(action.payload)};
         case 'MOVE_FORWARD':
          console.log(action.payload, state)
           return {...state,
              allplayers: state.allplayers.map((p) => {
                  
                  if (p.playerId === state.currPlayer) {
                    console.log(state.allplayers[state.currPlayer].currentPostion + action.payload)

                    return {
                      ...p,
                      currentPostion: Math.min(state.allplayers[state.currPlayer].currentPostion + action.payload, 99)
                      //if currentPostion line && if the current player 0 !== current ++1
                    }
                  }
                  return p;
                }),
              }
            
               case 'CHANGE_PLAYER':
                 return {
                   ...state,
                   
                   currPlayer: (state.currPlayer+1)%state.allplayers.length
                   //it means that the value of current value is 3, value of c
                 }
            // currentPostion: state.currentPosition +1}
        //player forward action next throguh this reducer
        case 'JUMP':
          console.log(action.payload, state.currPlayer)
          return {...state,
            allplayers: state.allplayers.map((p) => {
                // console.log(p.id);
                if (p.playerId === state.currPlayer) {
                  console.log(state, state.currPlayer)

                  return {
                    ...p,
                    currentPostion: action.payload
                    
                  }
                }
                return p;
              }),
            }
          
            //empty array
          case 'GET_FIRST_PLAYER':
            console.log(action.payload);
            return {...state, allplayers: Array.from([action.payload])}
          case 'GET_THE_PLAYER_ONEBYONE':
            console.log(action.payload);
            return {...state,
              allplayers: state.allplayers.concat(action.payload)};
              //reducer actions are adding the right players to the array with concat
              case 'SET_PLAYER':
                return {...state, allplayers: action.payload}
          case 'START_SAVE_PLAYER_REQUEST':
            console.log(action.payload);
            return state;
        default:
          return state
    }
  };

  export default playerReducer;
  //player object something that has which space they are on,

  
 