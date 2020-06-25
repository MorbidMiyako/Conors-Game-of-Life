// calculates the new true tiles
// returns array with at position 0 the updated gameBoard and at position 1 the updated trueTiles
const RedrawGameBoard = (gameBoard, trueTiles) => {
    //console.log("______")
    //console.log("______")
    //console.log("______")

    // set with scope wide
    let gameBoardWidth = gameBoard[0].length
    let gameBoardHeight = gameBoard.length

    // create variables scope wide
    let leftEdge = false
    let rightEdge = false
    let topEdge = false
    let bottomEdge = false

    // optional to make tile choice more readable
    // let topLeftTile = []
    // let topMiddleTile = []
    // let topRightTile = []
    // let middleLeftTile = []
    // let middelMiddleTile = []
    // let middleRightTile = []
    // let bottomLeftTile = []
    // let bottomMiddleTile = []
    // let bottomRightTile = []

    // create an object to reduce search times
    // store which tiles have been checked as cache to prevent reruns
    let checkedTiles = {}


    // create a new object to return without messing up the old TrueTiles since they are used
    // object as global variable to reduce deletion time when changes are made to the grid
    let newTrueTiles = {}

    // create a new return matrix to store the updated tiles since original variable is still used
    let newGameBoard = CreateGameBoard(gameBoardHeight, gameBoardWidth)

    //for each trueTile, run the function for the tiles around it
    //look into storing which tiles have been checked to prevent checking tiles multiple times
    //after checking trueTile should be removed
    Object.values(trueTiles).forEach(array => {

        // set parameters to determine if tile should be checked
        leftEdge = (array[1] === 0) ? true : false
        rightEdge = (array[1] === gameBoardWidth - 1) ? true : false
        topEdge = (array[0] === 0) ? true : false
        bottomEdge = (array[0] === gameBoardHeight - 1) ? true : false

        // topLeftTile = [array[0] - 1, array[1] - 1]
        // topMiddleTile = []
        // topRightTile = []
        // middleLeftTile = []
        // middelMiddleTile = []
        // middleRightTile = []
        // bottomLeftTile = []
        // bottomMiddleTile = []
        // bottomRightTile = []

        if (!leftEdge && !topEdge) {
            //console.log("topleft")
            // check checkedTiles if tile has been done already
            if (checkedTiles[`${array[0] - 1}, ${array[1] - 1}`] === undefined) {
                // change gameBoard tiles
                if (CheckTilesAroundTile(gameBoard, array[0] - 1, array[1] - 1)) {
                    //console.log("i get true!!!")
                    // set tile to true and update the newTrueTiles
                    newGameBoard[array[0] - 1][array[1] - 1] = true
                    // change newTrueTiles !!! DONT CHANGE THE OLD ONE SINCE THIS ONE IS USED UNTIL THE FUNCTION IS FINISHED
                    // ??? might be that due to the forEach loop the list is pre buffered
                    newTrueTiles[`${array[0] - 1}, ${array[1] - 1}`] = [array[0] - 1, array[1] - 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] - 1][array[1] - 1] = false
                }
                // add checked tile to list which is checked
                checkedTiles[`${array[0] - 1}, ${array[1] - 1}`] = [array[0] - 1, array[1] - 1]
            }
        }

        if (!topEdge) {
            //console.log("topmiddle")
            if (checkedTiles[`${array[0] - 1}, ${array[1]}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0] - 1, array[1])) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0] - 1][array[1]] = true
                    newTrueTiles[`${array[0] - 1}, ${array[1]}`] = [array[0] - 1, array[1]]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] - 1][array[1]] = false
                }
                checkedTiles[`${array[0] - 1}, ${array[1]}`] = [array[0] - 1, array[1]]
            }
        }

        if (!rightEdge && !topEdge) {
            //console.log("topright")
            if (checkedTiles[`${array[0] - 1}, ${array[1] + 1}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0] - 1, array[1] + 1)) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0] - 1][array[1] + 1] = true
                    newTrueTiles[`${array[0] - 1}, ${array[1] + 1}`] = [array[0] - 1, array[1] + 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] - 1][array[1] + 1] = false
                }
                checkedTiles[`${array[0] - 1}, ${array[1] + 1}`] = [array[0] - 1, array[1] + 1]
            }
        }

        if (!leftEdge) {
            //console.log("middleleft")
            if (checkedTiles[`${array[0]}, ${array[1] - 1}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0], array[1] - 1)) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0]][array[1] - 1] = true
                    newTrueTiles[`${array[0]}, ${array[1] - 1}`] = [array[0], array[1] - 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0]][array[1] - 1] = false
                }
                checkedTiles[`${array[0]}, ${array[1] - 1}`] = [array[0], array[1] - 1]
            }
        }

        if (checkedTiles[`${array[0]}, ${array[1]}`] === undefined) {
            //console.log("middlemiddle")
            if (CheckTilesAroundTile(gameBoard, array[0], array[1])) {
                //console.log("i get true!!!")
                newGameBoard[array[0]][array[1]] = true
                newTrueTiles[`${array[0]}, ${array[1]}`] = [array[0], array[1]]
            }
            else {
                //console.log("i get false!!!")
                newGameBoard[array[0]][array[1]] = false
            }
            checkedTiles[`${array[0]}, ${array[1]}`] = [array[0], array[1]]
        }

        if (!rightEdge) {
            //console.log("middleright")
            if (checkedTiles[`${array[0]}, ${array[1] + 1}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0], array[1] + 1)) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0]][array[1] + 1] = true
                    newTrueTiles[`${array[0]}, ${array[1] + 1}`] = [array[0], array[1] + 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0]][array[1] + 1] = false
                }
                checkedTiles[`${array[0]}, ${array[1] + 1}`] = [array[0], array[1] + 1]
            }
        }

        if (!leftEdge && !bottomEdge) {
            //console.log("bottomleft")
            if (checkedTiles[`${array[0] + 1}, ${array[1] - 1}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0] + 1, array[1] - 1)) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0] + 1][array[1] - 1] = true
                    newTrueTiles[`${array[0] + 1}, ${array[1] - 1}`] = [array[0] + 1, array[1] - 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] + 1][array[1] - 1] = false
                }
                checkedTiles[`${array[0] + 1}, ${array[1] - 1}`] = [array[0] + 1, array[1] - 1]
            }
        }

        if (!bottomEdge) {
            //console.log("bottommiddle")
            if (checkedTiles[`${array[0] + 1}, ${array[1]}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0] + 1, array[1])) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0] + 1][array[1]] = true
                    newTrueTiles[`${array[0] + 1}, ${array[1]}`] = [array[0] + 1, array[1]]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] + 1][array[1]] = false
                }
                checkedTiles[`${array[0] + 1}, ${array[1]}`] = [array[0] + 1, array[1]]
            }
        }

        if (!rightEdge && !bottomEdge) {
            //console.log("bottomright")
            if (checkedTiles[`${array[0] + 1}, ${array[1] + 1}`] === undefined) {
                if (CheckTilesAroundTile(gameBoard, array[0] + 1, array[1] + 1)) {
                    //console.log("i get true!!!")
                    newGameBoard[array[0] + 1][array[1] + 1] = true
                    newTrueTiles[`${array[0] + 1}, ${array[1] + 1}`] = [array[0] + 1, array[1] + 1]
                }
                else {
                    //console.log("i get false!!!")
                    newGameBoard[array[0] + 1][array[1] + 1] = false
                }
                checkedTiles[`${array[0] + 1}, ${array[1] + 1}`] = [array[0] + 1, array[1] + 1]
            }
        }
    })

    return [newGameBoard, newTrueTiles]
}
