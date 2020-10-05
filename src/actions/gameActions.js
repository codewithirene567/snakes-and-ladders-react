export const addPlayer = playerInfoObject => ({type:"ADD_PLAYER", payload: playerInfoObject})
export const playerWon = playerInfoObject => ({type:"PLAYER_WON", payload: playerInfoObject})
export const moveForward = playerInfoObject => ({type:"MOVE_FORWARD", payload: playerInfoObject})
export const changePlayer = playerInfoObject => ({type: "CHANGE_PLAYER", payload: playerInfoObject})
export const jump = (newPosition) => ({type:"JUMP", payload: newPosition})
// export const clearPlayerState = playerInfoObject => ({type: "CLEAR_GAME_STATE", payload: playerInfoObject})
// export const clearGameState = playerInfoObject => ({type: "CLEAR_PLAYER_STATE", payload: playerInfoObject})
//export const won = (winnerNow)=> ({type:"WON", payload: winnerNow})
// export const startSaveGameRequest = (gameInfo) => ({type:'START_SAVE_GAME_REQUEST', payload: gameInfo})
// export const startSavePlayerRequest = (gameInfo) => ({type:'START_SAVE_PLAYER_REQUEST', payload: gameInfo})
export const setPlayers = players => ({type:"SET_PLAYER", payload: players})
export const clearState = playerInfoObject => ({type: 'CLEAR_PLAYER_STATE', payload: playerInfoObject})

export const saveGame = (game) =>{
    console.log(game)
    // game.timeStamp = currentTimeStamp
    return ( dispatch) => {
        const configObj ={
            method: 'POST',
            headers: {"Content-Type": "application/json",
            "Accept": "application/json",
           
        },
        body: JSON.stringify(game)
        }
         fetch('http://127.0.0.1:3000/game', configObj) 
         .then(response => response.json())
         .then(data => {
            //dispatch(() => {savePlayers(player, currentTimeStamp)})
            dispatch({type:'START_SAVE_GAME_REQUEST', payload: data})

          })
        }  
}

export const savePlayers = (player, currentTimeStamp) =>{
   
    player.timeStamp = currentTimeStamp
    console.log("called", player)
    return ( dispatch) => {
        const configObj ={
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
           
        },
        body: JSON.stringify(player)
        }
         fetch('http://127.0.0.1:3000/player', configObj)    
         .then(response => response.json())
         .then(data => {
            dispatch({type:'START_SAVE_PLAYER_REQUEST', payload: data})
          })
    }  
}

export const savePlayersArray = (players, currentTimeStamp) => {
    players = players.map((p) => {
        p['timeStamp'] = currentTimeStamp;
        return p;
    });
    console.log(players)
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
           
        },
        body: JSON.stringify(players)
        }
        fetch('http://127.0.0.1:3000/player', configObj)    
         .then(response => response.json())
         .then(data => {
            dispatch({type:'START_SAVE_PLAYER_REQUEST', payload: data})
          })
    }
}



export const getGame = (gameId) =>{
   
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/game/'+gameId)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_ONE_GAME', payload:data}))
      }
}

export const getAllGame = () =>{
   
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/game/')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_THE_GAME', payload:data}))
      }
}

export const getPlayers = () =>{
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/player`)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_THE_PLAYERS', payload:data}))
      }
       
    }

    // export const getFirstPlayer = (playerTableId) =>{
    //     console.log(playerTableId);
    //     return (dispatch) => {
    //         fetch('http://127.0.0.1:3000/player/'+playerTableId)
    //         .then(response => response.json())
    //         .then(data => dispatch({type: 'GET_FIRST_PLAYER', payload:data}))
    //       }
           
    //     }
    // export const getPlayerOnebyOne = (playerId) =>{
    //     return (dispatch) => {
    //         fetch('http://127.0.0.1:3000/player/'+playerId)
    //         .then(response => response.json())
    //         .then(data => dispatch({type: 'GET_THE_PLAYER_ONEBYONE', payload:data}))
    //       }
           
    //     }
        //--------------------------------
        export const updateGame = (game) =>{
   
            //game.timeStamp = currentTimeStamp
            let id = game.id
            return ( dispatch) => {
                const configObj ={
                    method: 'PATCH',
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                   
                },
                body: JSON.stringify(game)
                }
                 fetch('http://127.0.0.1:3000/game/'+id, configObj)    
                 .then(response => response.json())
                //  .then(data => {
                //     dispatch({type:'UPDATE_GAME', payload: data})
                //   })
            }  
        }
        
        export const updatePlayers = (player, currentTimeStamp) =>{
            let id = player.id
            player.timeStamp = currentTimeStamp
            return ( dispatch) => {
                const configObj ={
                    method: 'PATCH',
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(player)
                }
                 fetch('http://127.0.0.1:3000/player/'+id, configObj)    
                 .then(response => response.json())
                 .then(data => {
                    dispatch({type:'UPDATE_PLAYERS', payload: data})
                  })
            }  
        }

        export const updatePlayersArray = (players) => {
            return (dispatch) => {
                const configObj ={
                    method: 'PATCH',
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(players)
                }
                fetch('http://127.0.0.1:3000/player/'+players[0].id, configObj)    
                 .then(response => response.json())
                 .then(data => {
                    dispatch({type:'UPDATE_PLAYERS', payload: data})
                  })
            }
        }
// .then(data => {
//     dispatch(({type: 'START_SAVE_GAME_REQUEST', payload: data})
// }) 


   
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         currPlayer: .currPlayer,
               
                
        //     })
        //  })
         // t.integer "currPlayer"
    // t.boolean "winStatus"
    // t.string "winnerName"
    // t.string "timeStamp"
    // t.integer "gameId"
         //.then(resp => type: '')
       
// export function savePlayer(state) {
//     return (dispatch) => {
//         dispatch({type: 'START_SAVE_PLAYER_REQUEST'});
//         fetch('http://127.0.0.1:3000/player', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: state
//          })
//          //.then(resp => type: '')
//         }
    
// 