
 const intialState = {
   currPlayer: 0,
   allplayers: []

 }

function playerReducer(state = intialState, action){
    switch (action.type) {
       case 'ADD_PLAYER':
          return {...state,
            allplayers: state.allplayers.concat(action.payload)};
         case 'MOVE_FORWARD':
          console.log(state)
           return {...state,
              allplayers: state.allplayers.map((p) => {
                  
                  if (p.id === state.currPlayer) {
                    console.log(state, state.currPlayer)

                    return {
                      ...p,
                      currentPostion: state.allplayers[state.currPlayer].currentPostion + 1
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
        
        default:
          return state;
    }
  };

  export default playerReducer;
  //player object something that has which space they are on,
 