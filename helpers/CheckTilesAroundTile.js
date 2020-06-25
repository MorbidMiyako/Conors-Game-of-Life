// checks tiles around tile and returns true or false, indicating if tile should be alive or death next frame
const CheckTilesAroundTile = (gameBoard, i, j) => {
    // make checking if the edge is reached easier
    let gameBoardWidth = gameBoard[0].length
    let gameBoardHeight = gameBoard.length

    // count how many tiles around current tiles are turned on
    let trueTileCount = 0

    // checks if we are at the edge or not
    let leftEdge = (j === 0) ? true : false
    let rightEdge = (j === gameBoardWidth - 1) ? true : false
    let topEdge = (i === 0) ? true : false
    let bottomEdge = (i === gameBoardHeight - 1) ? true : false

    // depending on if the surrounding field is on the edge or not increment the count
    if (!leftEdge && !topEdge) {
        if (gameBoard[i - 1][j - 1]) {
            trueTileCount += 1
        }
    }

    if (!topEdge) {
        if (gameBoard[i - 1][j]) {
            trueTileCount += 1
        }
    }

    if (!rightEdge && !topEdge) {
        if (gameBoard[i - 1][j + 1]) {
            trueTileCount += 1
        }
    }

    if (!leftEdge) {
        if (gameBoard[i][j - 1]) {
            trueTileCount += 1
        }
    }

    let currentTile = gameBoard[i][j]

    if (!rightEdge) {
        if (gameBoard[i][j + 1]) {
            trueTileCount += 1
        }
    }

    if (!leftEdge && !bottomEdge) {
        if (gameBoard[i + 1][j - 1]) {
            trueTileCount += 1
        }
    }

    if (!bottomEdge) {
        if (gameBoard[i + 1][j]) {
            trueTileCount += 1
        }
    }

    if (!rightEdge && !bottomEdge) {
        if (gameBoard[i + 1][j + 1]) {
            trueTileCount += 1
        }
    }

    //console.log("I RAN")
    //console.log("________")
    // after taking count of tiles around that are turned on determine if tile should be true or false
    if (currentTile) {
        if (2 === trueTileCount || trueTileCount === 3) {
            //console.log("ran line 216")
            //console.log(trueTileCount, "trueTileCount")
            //console.log(2 === trueTileCount || trueTileCount === 3)
            return true
        }

        else {
            //console.log("ran line 222")
            //console.log(trueTileCount, "trueTileCount")
            return false
        }
    }

    if (!currentTile) {
        if (trueTileCount === 3) {
            //console.log("ran line 231")
            //console.log(trueTileCount, "trueTileCount")
            //console.log(trueTileCount === 3)
            return true
        }

        else {
            //console.log("ran line 237")
            //console.log(trueTileCount, "trueTileCount")
            return false
        }
    }


}
