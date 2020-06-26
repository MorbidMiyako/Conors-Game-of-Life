// creates the templates div
function templatesDivCreate() {
    const templatesDiv = document.createElement('div')
    const spaceShipTemplate = document.createElement('button')

    templatesDiv.appendChild(spaceShipTemplate)

    spaceShipTemplate.textContent = "Quasar"

    //when clicked it will reload the gameboard to ensure correct size and reapply colour settings
    spaceShipTemplate.addEventListener("click", () => {
        gameBoard = quasarTemplate

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

        generationCount = 0

        document.getElementById("generationCount").textContent = `Current generation: ${generationCount}`

        LoadTemplateBoard(quasarTemplate)
    })

    return templatesDiv
}
