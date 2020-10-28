export const addPlayer = playerInfoObject => ({type:"ADD_PLAYER", payload: playerInfoObject})
export const playerWon = playerInfoObject => ({type:"PLAYER_WON", payload: playerInfoObject})
export const moveForward = playerInfoObject => ({type:"MOVE_FORWARD", payload: playerInfoObject})
export const changePlayer = playerInfoObject => ({type: "CHANGE_PLAYER", payload: playerInfoObject})
export const jump = (newPosition) => ({type:"JUMP", payload: newPosition})

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
        console.log("c")
         fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/game', configObj) 
         
         .then(response => response.json())
         .then(data => {
            //dispatch(() => {savePlayers(player, currentTimeStamp)})
            console.log("d")
            dispatch({type:'START_SAVE_GAME_REQUEST', payload: data})

          })
        }  
}

// export const savePlayers = (player, currentTimeStamp) =>{
   
//     player.timeStamp = currentTimeStamp
//     console.log("called", player)
//     return ( dispatch) => {
//         const configObj ={
//             method: 'POST',
//             headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
           
//         },
//         body: JSON.stringify(player)
//         }
//          fetch('http://127.0.0.1:3000/player', configObj)    
//          .then(response => response.json())
//          .then(data => {
//             dispatch({type:'START_SAVE_PLAYER_REQUEST', payload: data})
//           })
//     }  
// }

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
        fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/player', configObj)    
         .then(response => response.json())
         .then(data => {
            dispatch({type:'START_SAVE_PLAYER_REQUEST', payload: data})
          })
    }
}



export const getGame = (gameId) =>{
   
    return (dispatch) => {
        fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/game/'+gameId)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_ONE_GAME', payload:data}))
      }
}

export const getAllGame = () =>{
   
    return (dispatch) => {
        fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/game/')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_THE_GAME', payload:data}))
      }
}

export const getPlayers = () =>{
    return (dispatch) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/player`)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_THE_PLAYERS', payload:data}))
      }
       
    }

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
                 fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/game/'+id, configObj)    
                 .then(response => response.json())
                //  .then(data => {
                //     dispatch({type:'UPDATE_GAME', payload: data})
                //   })
            }  
        }
        
        // export const updatePlayers = (player, currentTimeStamp) =>{
        //     let id = player.id
        //     player.timeStamp = currentTimeStamp
        //     return ( dispatch) => {
        //         const configObj ={
        //             method: 'PATCH',
        //             headers: {
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //         },
        //         body: JSON.stringify(player)
        //         }
        //          fetch('http://127.0.0.1:3000/player/'+id, configObj)    
        //          .then(response => response.json())
        //          .then(data => {
        //             dispatch({type:'UPDATE_PLAYERS', payload: data})
        //           })
        //     }  
        // }

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
                fetch('https://cors-anywhere.herokuapp.com/https://fast-journey-86003.herokuapp.com/player/'+players[0].id, configObj)    
                 .then(response => response.json())
                 .then(data => {
                    dispatch({type:'UPDATE_PLAYERS', payload: data})
                  })
            }
        }
