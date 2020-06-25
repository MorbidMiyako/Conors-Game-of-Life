// appends all the components creating the game component 
function pageCreate() {
  const generalDiv = document.createElement('div')
  const controlsDiv = document.createElement('div')

  generalDiv.setAttribute("id", "generalDiv")
  controlsDiv.setAttribute("id", "controlsDiv")

  //creates the tiles/gameBoard div
  generalDiv.appendChild(gameBoardDivCreate())

  // creates the generationCount div 
  controlsDiv.appendChild(generationDivCreate())

  // creates the buttons div 
  controlsDiv.appendChild(buttonsDivCreate())

  // creates the settings div 
  controlsDiv.appendChild(settingsDivCreate())

  // creates the templates div
  controlsDiv.appendChild(templatesDivCreate())

  generalDiv.appendChild(controlsDiv)

  return generalDiv
}

const upperGameBoardDiv = document.querySelector(".gameOfLife")
upperGameBoardDiv.appendChild(pageCreate())
