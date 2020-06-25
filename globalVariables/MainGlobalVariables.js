// creates object to store only the tiles which are true, this prevents looping over entire matrix
// an object has lower look up times, thus deletion is faster
let trueTiles = {

}

// creates initial gameBoard
let gameBoard = CreateGameBoard(50, 50)

// keeps count of the generation
let generationCount = 0

// houses the callback function to allow the setInterval function to stop
let play = false
// checks if the game is running, to starting a second setInterval, overriding the play variable keepint the stop button from working properly
let isPlaying = false

//keeps track of the speed
let speed = 100

//stores the colour settings
let bgcolour = undefined
let fgcolour = undefined
