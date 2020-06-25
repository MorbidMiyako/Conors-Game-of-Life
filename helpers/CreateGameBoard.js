// creates matrix of desired size
const CreateGameBoard = (height, width) => {
    let matrice = []
    for (let i = 0; i < height; i++) {
        let line = []
        for (let j = 0; j < width; j++) {
            line.push(false)
        }
        matrice.push(line)
    }
    return matrice
}
