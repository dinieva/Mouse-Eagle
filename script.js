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

const bikerGo = () => {
    if ((countHorizontal > -200) || (countVertical < 200)) {
        bikerHeight = +bikerHeight + 5;
        biker.style.height = `${bikerHeight}px`
    }
}

// функция орёл нападает
let countHorizontal = 0;
let countVertical = 0;

const eagleHunt = () => {
    if ((countHorizontal > -200) || (countVertical < 200)) {
        countHorizontal -= 5
        countVertical += 5
        eagle.style.left = countHorizontal + 'px'
        eagle.style.top = countVertical + 'px'
    }
}

let activate;

sun.addEventListener('click', function () {
    if (activate) {
        activate = clearTimeout(activate);
    }
    else {
        activate = setInterval(function () {
            bikerGo()
            eagleHunt();
        }, 100)
    }
})
// функция сброса, которая будет возвращать анимацию в первоначальное состояние.
cloud.addEventListener('click', function () {
    activate = clearTimeout(activate);
    biker.style.height = '100px';
    bikerHeight = 100;
    countHorizontal = 0;
    countVertical = 0;
    eagle.style.left = '0px';
    eagle.style.top = '0px';
});