
 const intialState = {
   currPlayer: 0,
   winStatus: false,
   allplayers: [],
   winnerName: "",
   timeStamp: ""

 }

function playerReducer(state = intialState, action){
    switch (action.type) {
    
      case 'CLEAR_PLAYER_STATE':
        return intialState;
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

  
 