let btns  = document.querySelectorAll('.btn');
let value = document.querySelector('#value');


let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
       const styles = e.currentTarget.classList;
       styles.contains('increase')?count++:styles.contains('decrease')?count--: count = 0; 
       count > 0? value.style.color = 'green': count < 0? value.style.color = 'red': value.style.color = '#222'
       value.textContent = count;
    })
});