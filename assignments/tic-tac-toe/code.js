const player1 = 'X'
const player2 = 'O'

drawFilledRect(0, 0, width, height, 'rgba(115,175,255,1)')
const coordArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]
const max = Math.max(width, height)
const min = Math.min(width, height)
for (let editConst = 1 / 3; editConst < 1; editConst += 1 / 3) {
  drawLine(max / 2 - min / 2 + min * editConst, height, max / 2 - min / 2 + min * editConst, 0, 'black', 5)
  drawLine(max / 2 - min / 2, height * editConst, max / 2 + min / 2, height * editConst, 'black', 5)
}

const isGameDraw = (coordArray) => {
  let count = 0
  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      if (coordArray[x][y] == '') {
        count++
      }
    }
  }
  return count > 0
}

const isWinner = (player) => {
  for (let p = 0; p <= 2; p++) {
    (coordArray[p][0] == player) ? (coordArray[p][1] == player) ? (coordArray[p][2] == player) ? true : false : false : false;
    (coordArray[0][p] == player) ? (coordArray[1][p] == player) ? (coordArray[2][p] == player) ? true : false : false : false;
    (coordArray[0][0] == player) ? (coordArray[1][1] == player) ? (coordArray[2][2] == player) ? true : false : false : false;
    (coordArray[0][2] == player) ? (coordArray[1][1] == player) ? (coordArray[2][0] == player) ? true : false : false : false;
  }
}

const isGameOver = (array, player) => {
  return isWinner (player) || isGameDraw (array)
}

let xPos;
let yPos;
let player = player1;
registerOnclick((x, y) => {
  if (x < max / 2 - min / 2 || x > max / 2 + min / 2) {
    drawText('🦖 yee', x - height / 3, y + height / 6, 'yellow', height / 2)
  } else {
    y < 1 / 3 * height ? yPos = 0 : y < 2 / 3 * height ? yPos = 1 : yPos = 2;
    x < max / 2 - min / 6 ? xPos = 0 : x < max / 2 + min / 6 ? xPos = 1 : xPos = 2
    if (coordArray[yPos][xPos] == '') {
      coordArray[yPos][xPos] = player
      drawText(player, max / 2 - min / 2 - min * 0.15 + min / 6 + (min * xPos / 3), min * 0.11 + min / 6 + min * yPos / 3, 'black', min * 0.3);
      console.log(coordArray);
      console.log (isGameOver (coordArray, player))
      player == player1 ? player = player2 : player = player1;
    }
  }
});