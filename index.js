const body = document.querySelector('body')
const btnContainer = document.querySelector('.button-container')
const switchBtn = document.querySelector('.switch')
const h1 = document.querySelector('h1')
console.log(switchBtn.style.color);
btnContainer.addEventListener('click', e=> {
    console.log(switchBtn.style.color);

    body.classList.toggle('body-clicked')

    btnContainer.classList.toggle('button-container-right')

    switchBtn.classList.toggle('switch-right')

    h1.classList.toggle('h1-switch')
})