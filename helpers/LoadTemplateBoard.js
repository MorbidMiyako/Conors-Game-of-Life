// uses template to create a new gameboard
const LoadTemplateBoard = (newGameBoard) => {
    let newTrueTiles = {}
    newGameBoard.forEach((gameRow, i) => {
        gameRow.forEach((gameTile, j) => {
            if (gameTile) {
                newTrueTiles[`${i}, ${j}`] = [i, j]
            }
        })
    })
    gameBoard = newGameBoard
    trueTiles = newTrueTiles
    Object.values(trueTiles).forEach(array => {
        document.getElementById(`T${array[0]},${array[1]}`).classList.toggle("hidden")
        document.getElementById(`F${array[0]},${array[1]}`).classList.toggle("hidden")
    })
}
