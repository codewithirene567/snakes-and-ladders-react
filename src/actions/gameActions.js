export const addPlayer = playerInfoObject => ({type:"ADD_PLAYER", payload: playerInfoObject})
export const playerWon = playerInfoObject => ({type:"PLAYER_WON", payload: playerInfoObject})
export const moveForward = playerInfoObject => ({type:"MOVE_FORWARD", payload: playerInfoObject})
export const changePlayer = playerInfoObject => ({type: "CHANGE_PLAYER", payload: playerInfoObject})
