// const colors = ['red', 'green','rgba(133,122,200)','#f15025']; 

const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn  = document.querySelector('.btn');
const color =  document.querySelector('.color');

btn.addEventListener('click', () => {
    let pageColor = '#';
    // const randomColor =  ;
    for(let i = 0; i < 6; i++){
        pageColor+=colors[Math.floor(Math.random()*colors.length)];
    }
    document.body.style.backgroundColor = pageColor;
    color.textContent = pageColor;
})