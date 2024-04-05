const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const inputList = document.querySelector('.inputList');
const result = document.querySelector('.result');

let currentResult = 0;
let inputValue = 0;

let operators = ['+', '−', '×', '÷'];
let currentOperator = '';

let isNum = false;
let gotResult = false;

btn.forEach((item)=>{
  item.addEventListener("click", (e)=>{

    switch(e.target.innerText){
      case '0': 
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(!gotResult)
        updateInput(e);
        else{
          reset();
          updateInput(e);
          gotResult = false;
        }
        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        takeInput(e.target.innerText);
        inputList.textContent += e.target.innerText;
        break;
      case 'AC':
        reset();
        break;
      case 'CE':
        let inputContent = input.textContent.split('');
        inputContent.splice(-1,1);
        input.textContent = inputContent.join('');
        let inputListContent = inputList.textContent.split('');
        inputListContent.splice(-1,1);
        inputList.textContent = inputListContent.join('');
        break;
        case '=':
          takeInput(e.target.innerText);
          break;
      default:
        break;
    }
     

  })  
});

function updateInput(e){

  input.textContent += e.target.innerText;
  inputList.textContent += e.target.innerText;

}

function takeInput(operator){



  inputValue = parseInt(input.textContent);
  console.log(inputValue);
  currentResult !== 0 ? currentResult = operate(currentResult, inputValue, currentOperator) : currentResult = inputValue;
  console.log(currentResult);

  result.textContent = currentResult;
  input.textContent = '';
  
  if(operator === '='){
    currentOperator = '';
    gotResult = true;
  }
  else{currentOperator = operator;}
  isCalculating = true;
}

function add(...num){
    let sum = 0;
  for (const value of num) {
    sum += value;
  }
  return sum;
}

function subtract(...num){
    let result = num[0];
    num.shift();
  for (const value of num) {
    result -= value;
  }
  return result;
}

function multiply(...num){
    let result = 1;
  for (const value of num) {
    result *= value;
  }
  return result;
}

function divide(...num){
  let result = num[0];
  num.shift();
  for (const value of num) {
    result = result/value;
  }
  return result;
}

function operate(first, second, operator){
  
  switch (operator){
    case '+':
      return add(first, second);
      break;
    case '−':
      return subtract(first,second);
      break;
    case '×':
      return multiply(first,second);
      break;
    case '÷':
      return divide(first,second);
      break;
    default:
      break;
  }
}

function reset(){
  input.textContent = '';
  result.textContent = '0';
  currentOperator = '';
  inputList.textContent = '';
  isNum = false;
  inputValue = 0;
  currentResult = 0;
  
}