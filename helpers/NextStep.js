// changes the hidden classes on the tiles which changed, firs it "resets" the board, then it sets hidden for the now alive cells
const NextStep = () => {
    let returnedArray = RedrawGameBoard(gameBoard, trueTiles)
    Object.values(trueTiles).forEach(array => {
        document.getElementById(`T${array[0]},${array[1]}`).classList.toggle("hidden")
        document.getElementById(`F${array[0]},${array[1]}`).classList.toggle("hidden")
    })
    gameBoard = returnedArray[0]
    trueTiles = returnedArray[1]
    generationCount += 1
    document.getElementById("generationCount").textContent = `Current generation: ${generationCount}`

    Object.values(trueTiles).forEach(array => {
        document.getElementById(`T${array[0]},${array[1]}`).classList.toggle("hidden")
        document.getElementById(`F${array[0]},${array[1]}`).classList.toggle("hidden")
    })
}
