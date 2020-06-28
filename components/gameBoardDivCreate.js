//creates the tiles/gameBoard div
function gameBoardDivCreate() {
    const gameBoardDiv = document.createElement('div')

    gameBoardDiv.setAttribute("id", "gameBoardDiv")

    //creates each tile, giving the live tiles a hidden class and an onclick that toggles the class
    gameBoard.forEach((array, i) => {
        const gameRow = document.createElement('div')

        gameRow.classList.add("gameRow")

        array.forEach((tile, j) => {
            const gameTileDiv = document.createElement('div')
            const trueTile = document.createElement('div')
            const falseTile = document.createElement('div')

            trueTile.classList.add("hidden")
            trueTile.classList.add("trueTile")
            falseTile.classList.add("falseTile")

            gameTileDiv.appendChild(trueTile)
            gameTileDiv.appendChild(falseTile)

            trueTile.setAttribute("id", `T${i},${j}`)
            falseTile.setAttribute("id", `F${i},${j}`)

            trueTile.addEventListener('click', () => {
                clearInterval(play)
                isPlaying = false
                generationCount = 0
                gameBoard[i][j] = false
                delete trueTiles[`${i}${j}`]
                trueTile.classList.toggle("hidden")
                falseTile.classList.toggle("hidden")
                document.getElementById("generationCount").textContent = `Current generation: ${generationCount}`
            })

            falseTile.addEventListener('click', () => {
                clearInterval(play)
                isPlaying = false
                generationCount = 0
                gameBoard[i][j] = true
                trueTiles[`${i}${j}`] = [i, j]
                trueTile.classList.toggle("hidden")
                falseTile.classList.toggle("hidden")
                document.getElementById("generationCount").textContent = `Current generation: ${generationCount}`
            })

            gameRow.appendChild(gameTileDiv)
        })

        gameBoardDiv.appendChild(gameRow)

    })

    return gameBoardDiv
}
