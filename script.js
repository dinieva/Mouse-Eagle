const sun = document.querySelector('.sun') // запуск
const cloud = document.querySelector('.cloud-wrapper') // сброс
const biker = document.querySelector('.biker')
const eagle = document.querySelector('.eagle')

// пока картинка не загрузилась размеры равну 0
biker.onload = function () {
    let width = this.width;
    let height = this.height;
}

// функция мышь уезжает от нападения
biker.setAttribute("style", biker.height); //Выход к style. Не меняется размер без атрибута. 
let bikerHeight = biker.getAttribute("style")
let countHorizontal = 0;
let countVertical = 0;
let activate = false;
let idInterval;


const startAnimate = () => {
    bikerHeight = +bikerHeight + 5;
    countHorizontal -= 5
    countVertical += 5

    idInterval = requestAnimationFrame(startAnimate)

    if ((countHorizontal > -210) || (countVertical < 210)) {
        // функция мышь уезжает от нападения
        biker.style.height = `${bikerHeight}px`
        // функция орёл нападает
        eagle.style.left = countHorizontal + 'px'
        eagle.style.top = countVertical + 'px'
    } else {
        // отмена запланированного запуска callback
        cancelAnimationFrame(activate);
    }
}

sun.addEventListener('click', function () {
    if (activate) {
        // отмена запланированного запуска callback
        cancelAnimationFrame(idInterval);
        activate = false
    } else {
        idInterval = requestAnimationFrame(startAnimate)
        activate = true
    }
})

// функция сброса, которая будет возвращать анимацию в первоначальное состояние.
cloud.addEventListener('click', function () {
    cancelAnimationFrame(idInterval);
    biker.style.height = '100px';
    bikerHeight = 100;
    countHorizontal = 0;
    countVertical = 0;
    eagle.style.left = '0px';
    eagle.style.top = '0px';
});




