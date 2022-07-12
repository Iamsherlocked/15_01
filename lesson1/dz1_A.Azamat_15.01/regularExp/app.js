const input = document.querySelector('.input');
const addClick = document.querySelector('.addClick');
const numberResult = document.querySelector('.numbersResult');

console.log(input);
console.log(addClick);

const passRegExp = /^0\d{13}$/;

addClick.addEventListener("click", () =>{
    if (passRegExp.test(input.value)){
        numberResult.innerText = 'Все правильно!'
        numberResult.style.cssText = 'color: green; font-weight: bold; font-family: Arial;'
    } else {
        numberResult.innerText = 'ИНН должен начинаться с - "0" - и не менее 14 цифр!'
        numberResult.style.cssText = 'color: red; font-weight: bold; font-family: Arial;'
    }
})

