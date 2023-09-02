let numbers = document.querySelectorAll('[data-number]')
let operations = document.querySelectorAll('[data-operation]')
let del = document.querySelector('[data-del]')
let clear = document.querySelector('[data-clear-all]')
let equal = document.querySelector('[data-equal]')
let num1 = document.querySelector('.number1')
let num2 = document.querySelector('.number2')
let op = document.querySelector('.op')
let answ = document.querySelector('.answer')


function add(n1, n2){
    return parseFloat(n1) + parseFloat(n2)
}

function substract(n1, n2){
    return parseFloat(n1) - parseFloat(n2)
}

function multiply(n1, n2){
    return parseFloat(n1) * parseFloat(n2)
}

function divide(n1, n2){
    if(n2 == 0){return 'Error'}
    return parseFloat(n1) / parseFloat(n2)
}

function operate(operator, first, second){
    switch(operator){
        case '+': return add(first, second); break;
        case '-': return substract(first, second); break;
        case '/': return divide(first, second); break;
        case 'X': return multiply(first, second); break;
    }
}

function roundToFive(num) {
    return +(Math.round(num + "e+5")  + "e-5");
}

function updateDisplay(number){
    if(op.textContent == ''){
        num1.textContent += number
    }
    else{
        num2.textContent += number
    }
}

function updateOperation(operation){
    if(num1.textContent != '' && num2.textContent == '' ){
        op.textContent = operation
    }else if (num1.textContent != '' && num2.textContent != ''){
        let meanwhile = roundToFive(operate(op.textContent, num1.textContent, num2.textContent));
        num1.textContent = meanwhile;
        answ.textContent = meanwhile;
        op.textContent = operation;
        num2.textContent = '';
    
    } else if (num1.textContent == '' && answ.textContent != ''){
        num1.textContent = answ.textContent;
        op.textContent = operation;

    }
}

numbers.forEach(number  => {
    number.addEventListener('click',  () => {
        updateDisplay(number.textContent)
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        updateOperation(operation.textContent)
    })
})

clear.addEventListener('click', () => {
    num1.textContent = ''
    num2.textContent = ''
    op.textContent = ''
    answ.textContent = ''
})

del.addEventListener('click', () => {
    if(answ.textContent){
        answ.textContent = answ.textContent.slice(0, -1)
    }
    if(op.textContent && !num2.textContent){
        op.textContent = op.textContent.slice(0, -1)
    }
    else if(!num2.textContent){
        num1.textContent = num1.textContent.slice(0, -1)
    }
    else if(num2.textContent){
        num2.textContent = num2.textContent.slice(0, -1)
    }
   
})

equal.addEventListener('click', () => {
    console.log(num1.textContent, op.textContent, num2.textContent);
    if(op.textContent != '' &&  num1.textContent != '' && num2.textContent != ''){
        let result = roundToFive(operate(op.textContent, num1.textContent, num2.textContent))
        answ.textContent = result
        num1.textContent = ''
        num2.textContent = ''
        op.textContent = ''
    }

})