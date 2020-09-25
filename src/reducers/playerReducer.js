
function playerReducer(state = [], action){
    switch (action.type) {
       case 'ADD_PLAYER':
          return [...state, action.payload];
        // case 'PLAYER_WON':
        //   return {}
        //player forward action next throguh this reducer
        default:
          return state;
    }
  };

  export default playerReducer;
  //player object something that has which space they are on,