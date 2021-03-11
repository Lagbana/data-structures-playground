/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const game = [[], [], []]
    let winner = ""
    
    for(let i =0; i < moves.length; i++){
      let m = moves[i]
      let mark = i % 2 === 0 ? "X" : "O"
      winner = mark === "X" ? "A" : "B"
      game[m[0]][m[1]] = mark
    }
    
    // Check parallel
    for (let r = 0; r < game.length; r++) {
      let len = game[r].length
      let check = new Set(game[r])
      // Outcome 1: win across rows
      if (len === 3 && check.size === 1) return winner

      // Outcome 2: win across columns
      if (game[0][r] && game[1][r] && game[2][r] && game[0][r] === game[1][r] && game[0][r] === game[2][r] && game[1][r] === game[2][r]) {
        return winner
      }
    }


    // Outcome 3: win 1st diagonal
    if (game[0][2] && game[1][1] && game[2][0] && game[0][2] === game[1][1] && game[0][2] === game[2][0] && game[1][1] === game[2][0]) {
      return winner
    }


    // Outcome 4: win 2nd diagonal
    if (game[0][0] && game[1][1] && game[2][2] && game[0][0] === game[1][1] && game[0][0] === game[2][2] && game[1][1] === game[2][2]) {
     return winner
    }

    // Other Outcomes
    if (moves.length === 9){
      return "Draw"
    } 

    return "Pending"
 
};