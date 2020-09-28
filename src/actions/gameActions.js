import axios from 'axios'


export const addPlayer = playerInfoObject => ({type:"ADD_PLAYER", payload: playerInfoObject})
export const playerWon = playerInfoObject => ({type:"PLAYER_WON", payload: playerInfoObject})
export const moveForward = playerInfoObject => ({type:"MOVE_FORWARD", payload: playerInfoObject})
export const changePlayer = playerInfoObject => ({type: "CHANGE_PLAYER", payload: playerInfoObject})
export const jump = (newPosition) => ({type:"JUMP", payload: newPosition})
//export const won = (winnerNow)=> ({type:"WON", payload: winnerNow})
export const startSaveGameRequest = (gameInfo) => ({type:'START_SAVE_GAME_REQUEST', payload: gameInfo})

export const saveGame = (game) =>{
    console.log(game)
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
            dispatch({type:'START_SAVE_GAME_REQUEST', payload: data})
          })
        }  
}

export const getGame = () =>{
    return (dispatch) => {
        dispatch({type: 'GET_THE_GAME'})
        fetch('http://127.0.0.1:3000/game')
        .then(response=>{
            return response.json()
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