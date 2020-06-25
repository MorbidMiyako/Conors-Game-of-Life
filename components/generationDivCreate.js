// creates the generationCount div 
function generationDivCreate() {
    const generationText = document.createElement('p')

    generationText.setAttribute("id", "generationCount")

    generationText.textContent = `Current generation: ${generationCount}`

    return generationText
}
