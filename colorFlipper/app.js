
var colors  = ['red', 'green','yellow','blue']
var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn = document.getElementById('btn');

let color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let choosenColor = '#';
  for(let i = 0; i < 6; i++){
    choosenColor += hex[Math.floor(Math.random()*hex.length)]
  }
  document.body.style.backgroundColor = choosenColor;
  color.textContent = choosenColor;
}) 

