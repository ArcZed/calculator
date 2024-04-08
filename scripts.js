const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const inputList = document.querySelector('.inputList');
const result = document.querySelector('.result');

let currentResult = 0;
let inputValue = 0;

let operators = ['+', '−', '×', '÷'];
let currentOperator = '';
let eventContent = '';

let isNum = false;
let gotResult = false;

document.addEventListener("keydown", (e)=>{

  eventContent = e.key;
  console.log(eventContent)
  switch(eventContent){
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
    case '.': 
      if(!gotResult){
      updateInput(eventContent);}
      else{
        reset()
        updateInput(eventContent);
        gotResult = false;
      }
      break;
    case '+':
      if(currentOperator === ''){currentOperator = eventContent}
      takeInput(eventContent);
      inputList.textContent += eventContent;
      break;
    case '-': 
      eventContent = '−';
      if(currentOperator === ''){currentOperator = eventContent}
      takeInput(eventContent);
      inputList.textContent += eventContent;
      break;
    case '*': 
      eventContent = '×';
      if(currentOperator === ''){currentOperator = eventContent}
      takeInput(eventContent);
      inputList.textContent += eventContent;
      break;
    case '/': 
      eventContent = '÷';
      if(currentOperator === ''){currentOperator = eventContent}
      takeInput(eventContent);
      inputList.textContent += eventContent;
      break;
    case 'r':
      reset();
      break;
    case 'Backspace':
    case 'Delete':
      let inputContent = input.textContent.split('');
      inputContent.splice(-1,1);
      input.textContent = inputContent.join('');
      let inputListContent = inputList.textContent.split('');
      inputListContent.splice(-1,1);
      inputList.textContent = inputListContent.join('');
      break;
      case '=':
      case 'Enter':
        eventContent = '='
        takeInput(eventContent);
        input.textContent = '';
        currentOperator = '';
        isNum = false;
        inputValue = 0;
        break;
    default:
      break;
  }
})

btn.forEach((item)=>{
  item.addEventListener("click", (e)=>{
    
    eventContent = e.target.innerText;
    switch(eventContent){
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
      case '.': 
      case 'Ans':
        if(!gotResult)
        updateInput(eventContent);
        else{
          reset();
          updateInput(eventContent);
          gotResult = false;
        }
        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        if(currentOperator === ''){currentOperator = eventContent}
        takeInput(eventContent);
        inputList.textContent += eventContent;
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
          takeInput(eventContent);
          input.textContent = '';
          currentOperator = '';
          isNum = false;
          inputValue = 0;
          break;
      default:
        break;
    }
  })  
});

function updateInput(content){

  input.textContent += content;
  inputList.textContent += content;

}

function takeInput(operator){
  
  let inputCont = input.textContent.split('');
  if(inputCont.filter(x => x === '.').length >= 2){
    inputValue = 'NaN';
  }
  else{
    if(input.textContent === 'Ans'){
      inputValue = previousAns;
    }
    else{inputValue = parseFloat(input.textContent);}
  }
  
  console.log(`${currentResult} ${inputValue} ${currentOperator}`)

  currentResult !== 0 ? currentResult = operate(currentResult, inputValue, currentOperator) : currentResult = inputValue;

  if(isNaN(currentResult)){
    result.textContent = 'Error';
  }
  else if(!isFinite(currentResult)){
    result.textContent = 'You are CURSED!!!';
  }
  else{result.textContent = Math.round(currentResult*100000)/100000;}

  input.textContent = '';
  
  if(operator === '='){
    currentOperator = '';
    gotResult = true;
  }
  else{currentOperator = operator;}
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
  gotResult = false;
}
