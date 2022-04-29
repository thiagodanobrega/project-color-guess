const ball = document.querySelectorAll('div');
const message = document.querySelector('#answer');
const scoreboardText = document.querySelector('#score');
let scoreboard = [0];
if(localStorage.getItem('scoreboard') !== null){
  scoreboard = JSON.parse(localStorage.getItem('scoreboard'));
}
function generateColor(){
  message.innerText = 'Escolha uma cor';
  let arrColors = [];
  for (let element of ball){
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    const color = `(${r}, ${g}, ${b})`;
    arrColors.push(color);
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  const textColor = document.querySelector('#rgb-color');
  const randomColor = arrColors[Math.floor(Math.random() * arrColors.length)]
  textColor.innerText = randomColor;
}
generateColor()

const colorsBall = document.querySelector('#colorsBall');
colorsBall.addEventListener('click', toCheck);
function toCheck(event){
  const textColor = `rgb${document.querySelector('#rgb-color').innerText}`;
  const color = event.target.style.backgroundColor;
  if(color == textColor){
    message.innerText = 'Acertou!';
    scoreboard = scoreboard.map(value => value += 3)
  } else{
    message.innerText = 'Errou! Tente novamente!';
    if(scoreboard[0] !== 0){
      scoreboard = scoreboard.map(value => value -= 1)
    }
  }
  scoreboardText.innerText = `Placar: ${scoreboard}`;
}
const btnResetGame = document.querySelector('#reset-game');
btnResetGame.addEventListener('click', resetGame);
function resetGame(){
  localStorage.setItem('scoreboard', JSON.stringify(scoreboard))
  generateColor()
}