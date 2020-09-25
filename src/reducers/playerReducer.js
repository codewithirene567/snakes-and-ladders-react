
function playerReducer(state = [], action){
    switch (action.type) {
       case 'ADD_PLAYER':
          return [...state, action.payload];
        // case 'PLAYER_WON':
        //   return {}
        default:
          return state;
    }
  };

  export default playerReducer;