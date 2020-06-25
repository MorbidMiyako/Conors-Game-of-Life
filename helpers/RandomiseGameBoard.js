// creates new gameboard with the same dimension and randomises their tiles to true or false
const RandomiseGameBoard = (gameBoard) => {
    let newGameBoard = CreateGameBoard(gameBoard.length, gameBoard[0].length)
    let newTrueTiles = {}
    gameBoard.forEach((gameBoardRow, i) => {
        gameBoardRow.forEach((gameTile, j) => {
            if (Math.round(Math.random()) === 1) {
                newGameBoard[i][j] = true
                newTrueTiles[`${i}, ${j}`] = [i, j]
                document.getElementById(`T${i},${j}`).classList.toggle("hidden")
                document.getElementById(`F${i},${j}`).classList.toggle("hidden")
            }
        })
    })
    return [newGameBoard, newTrueTiles]
}
