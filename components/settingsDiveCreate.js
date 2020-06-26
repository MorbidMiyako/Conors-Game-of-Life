// creates the settings div 
function settingsDivCreate() {
    const settingsDiv = document.createElement('form')
    const settingBackgroundColourLabel = document.createElement('label')
    const settingBackgroundColourSelect = document.createElement('input')
    const settingForegroundColourLabel = document.createElement('label')
    const settingForegroundColourSelect = document.createElement('input')
    const settingsBreak = document.createElement("br")
    const settingSpeedLabel = document.createElement('label')
    const settingSpeedInput = document.createElement('input')
    const settingDimensionsLabel = document.createElement('label')
    const settingDimensionsInput = document.createElement('input')
    const settingsSubmit = document.createElement('button')


    settingsDiv.setAttribute("name", "settingsForm")
    settingsDiv.setAttribute("id", "settingsDiv")


    settingsDiv.appendChild(settingBackgroundColourLabel)
    settingsDiv.appendChild(settingBackgroundColourSelect)

    settingBackgroundColourLabel.setAttribute("for", "bgcolour")

    settingBackgroundColourSelect.setAttribute("type", "text")
    settingBackgroundColourSelect.setAttribute("id", "bgcolour")
    settingBackgroundColourSelect.setAttribute("name", "bgcolour")
    settingBackgroundColourSelect.setAttribute("placeholder", "Off, #0f380f / green")


    settingsDiv.appendChild(settingForegroundColourLabel)
    settingsDiv.appendChild(settingForegroundColourSelect)

    settingForegroundColourLabel.setAttribute("for", "fgcolour")

    settingForegroundColourSelect.setAttribute("type", "text")
    settingForegroundColourSelect.setAttribute("id", "fgcolour")
    settingForegroundColourSelect.setAttribute("name", "fgcolour")
    settingForegroundColourSelect.setAttribute("placeholder", "On, #8bac0f / pink")


    settingsDiv.appendChild(settingsBreak)


    settingsDiv.appendChild(settingSpeedLabel)
    settingsDiv.appendChild(settingSpeedInput)

    settingSpeedInput.setAttribute("for", "speed")

    settingSpeedInput.setAttribute("type", "text")
    settingSpeedInput.setAttribute("id", "speed")
    settingSpeedInput.setAttribute("name", "speed")
    settingSpeedInput.setAttribute("placeholder", "Time in seconds")


    settingsDiv.appendChild(settingDimensionsLabel)
    settingsDiv.appendChild(settingDimensionsInput)

    settingDimensionsLabel.setAttribute("for", "dimensions")

    settingDimensionsInput.setAttribute("type", "text")
    settingDimensionsInput.setAttribute("id", "dimensions")
    settingDimensionsInput.setAttribute("name", "dimensions")
    settingDimensionsInput.setAttribute("placeholder", "50,50")


    settingsDiv.appendChild(settingsSubmit)

    settingsSubmit.textContent = "Apply settings"
    settingsSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        let newbgcolour = document.forms["settingsForm"]["bgcolour"].value
        let newfgcolour = document.forms["settingsForm"]["fgcolour"].value
        let newSpeed = document.forms["settingsForm"]["speed"].value
        let dimensions = document.forms["settingsForm"]["dimensions"].value

        dimensions = dimensions.split(",")

        // checks if input is correct before creating a new gameBoard
        if (!isNaN(dimensions[0]) && !isNaN(dimensions[1])) {

            gameBoard = CreateGameBoard(dimensions[0], dimensions[1])

            generalDiv.removeChild(document.getElementById("gameBoardDiv"))

            generalDiv.insertBefore(gameBoardDivCreate(), document.getElementById("generalDiv").childNodes[0])
        }

        // checks if a number is inputed and sets new speed variable and reloads buttons to create new evenListener
        if (!isNaN(Number(newSpeed)) && newSpeed !== 0) {
            speed = newSpeed * 1000

            controlsDiv.removeChild(document.getElementById("buttonsDiv"))

            controlsDiv.insertBefore(buttonsDivCreate(), document.getElementById("controlsDiv").childNodes[1])
        }

        // checks if input has been left empty, if not then it applies the new colour, otherwise it applies the old one
        if (newbgcolour !== "") {

            bgcolour = newbgcolour

            let backgroundElements = document.querySelectorAll(".falseTile")

            backgroundElements.forEach(elementToChange => {
                elementToChange.style.backgroundColor = bgcolour
            })
        }

        // if no new colour has been specified, it applies previous colour in case size of the board has changed
        else {
            let backgroundElements = document.querySelectorAll(".falseTile")

            backgroundElements.forEach(elementToChange => {
                elementToChange.style.backgroundColor = bgcolour
            })
        }

        if (newfgcolour !== "") {

            fgcolour = newfgcolour

            let foregroundElements = document.querySelectorAll(".trueTile")

            foregroundElements.forEach(elementToChange => {
                elementToChange.style.backgroundColor = fgcolour
            })

        }

        else {
            fgcolour = newfgcolour

            let foregroundElements = document.querySelectorAll(".trueTile")

            foregroundElements.forEach(elementToChange => {
                elementToChange.style.backgroundColor = fgcolour
            })

        }

        document.getElementById("settingsDiv").reset()

        console.log(newbgcolour, newfgcolour, speed, dimensions)
    })

    return settingsDiv
}
