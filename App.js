// appends all the components creating the game component 
function pageCreate() {
  const generalDiv = document.createElement('div')

  generalDiv.setAttribute("id", "generalDiv")

  //creates the tiles/gameBoard div
  generalDiv.appendChild(gameBoardDivCreate())

  // creates the generationCount div 
  generalDiv.appendChild(generationDivCreate())

  // creates the buttons div 
  generalDiv.appendChild(buttonsDivCreate())

  // creates the settings div 
  generalDiv.appendChild(settingsDivCreate())

  // creates the templates div
  generalDiv.appendChild(templatesDivCreate())


  return generalDiv
}

const upperGameBoardDiv = document.querySelector(".gameOfLife")
upperGameBoardDiv.appendChild(pageCreate())
