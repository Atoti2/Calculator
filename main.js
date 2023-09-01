let numbers = document.querySelectorAll('[data-number]')
let operations = document.querySelectorAll('[data-operation]')
let del = document.querySelector('[data-del]')
let clear = document.querySelector('[data-clear-all]')
let equal = document.querySelector('[data-equal]')
let num = document.querySelector('.numbers')
let op = document.querySelector('.op')
let answ = document.querySelector('.answer')

let number1
let number2
let operator
let result

equal.addEventListener('click', calculate)

function calculate(result){
    operate(operator, 3, 3)
    answ.textContent += 
}

function add(n1, n2){
    if(n1 == '' && n2 == ''){return ''}
    return n1 + n2
}

function substract(n1, n2){
    if(n1 == '' && n2 == ''){return ''}
    return n1 - n2
}

function multiply(n1, n2){
    if(n1 == '' && n2 == ''){return ''}
    return n1 * n2
}

function divide(n1, n2){
    if(n1 == '' && n2 == ''){return ''}
    if(n2 == 0){return 'Error'}
    return n1 / n2
}

function operate(operator, first, second){
    switch(operator){
        case '+': return add(first, second); break;
        case '-': return substract(first, second); break;
        case '/': return divide(first, second); break;
        case 'X': return multiply(first, second); break;
    }
}

function updateDisplay(number){
    console.log(number1)
    num.innerHTML += number.target.textContent
    return
}

numbers.forEach(number  => {
    number.addEventListener('click', updateDisplay)
})

operations.forEach(op => {
    op.addEventListener('click', ()=>{
        operator = op.textContent
        console.log(operator)
    })
})
