// creates the buttons div 
function buttonsDivCreate() {
    const buttonsDiv = document.createElement('div')

    buttonsDiv.setAttribute("id", "buttonsDiv")

    const nextStepButton = document.createElement('button')
    const startButton = document.createElement('button')
    const stopButton = document.createElement('button')
    const eraseButton = document.createElement('button')
    const randomButton = document.createElement('button')

    buttonsDiv.appendChild(nextStepButton)
    buttonsDiv.appendChild(startButton)
    buttonsDiv.appendChild(stopButton)
    buttonsDiv.appendChild(eraseButton)
    buttonsDiv.appendChild(randomButton)
    nextStepButton.textContent = "Next step"
    startButton.textContent = 'Start'
    stopButton.textContent = 'Stop'
    eraseButton.textContent = 'Erase'
    randomButton.textContent = 'Random Board'

    // runs the NextStep function
    nextStepButton.addEventListener('click', () => {
        NextStep()
    })

    // creates setInterval function for NextStep and sets returned value to play
    startButton.addEventListener('click', () => {
        if (!isPlaying) {
            play = setInterval(() => {
                NextStep()
            }, speed)
        }
        isPlaying = true
    })

    // calls the stop function that was set to play in the previous button
    stopButton.addEventListener('click', () => {
        clearInterval(play)
        isPlaying = false
    })

    // reloads the gameBoard with empty tiles and reapplies colour settings.
    // speed settings are inside the start button, and thus dont need to be reapplied
    eraseButton.addEventListener('click', () => {
        clearInterval(play)
        isPlaying = false
        gameBoard = CreateGameBoard(gameBoard.length, gameBoard[0].length)
        // needs to be set to -1 since NextStep updates the textContent after generationCount +=1
        NextStep()

        generalDiv.removeChild(document.getElementById("gameBoardDiv"))

        generalDiv.insertBefore(gameBoardDivCreate(), document.getElementById("generalDiv").childNodes[0])

        let backgroundElements = document.querySelectorAll(".falseTile")

        backgroundElements.forEach(elementToChange => {
            elementToChange.style.backgroundColor = bgcolour
        })

        let foregroundElements = document.querySelectorAll(".trueTile")

        foregroundElements.forEach(elementToChange => {
            elementToChange.style.backgroundColor = fgcolour
        })

        generationCount = -1
        NextStep()

    })

    // calls the RandomiseGameBoard function and sets new trueTiles and gameBoard value
    randomButton.addEventListener('click', () => {
        clearInterval(play)
        isPlaying = false
        let returnArray = RandomiseGameBoard(gameBoard)
        gameBoard = returnArray[0]
        trueTiles = returnArray[1]
        generationCount = 0
        document.getElementById("generationCount").textContent = `Current generation: ${generationCount}`
    })

    return buttonsDiv
}
