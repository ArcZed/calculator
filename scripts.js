const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const result = document.querySelector('.result');

let currentResult = 0;
let operators = ['+', '−', '×', '÷'];

let isNum = false;

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
      case '+':
      case '−':
      case '×':
      case '÷':
        input.textContent += e.target.innerText;
        break;
      case 'AC':
        reset();
        break;
      case 'CE':
        let inputContent = input.textContent.split('');
        inputContent.splice(-1,1);
        input.textContent = inputContent.join('');
        break;
      case '=':
        calculate();
      default:
        break;
    }
     

  })  
});

function calculate(){

  let inputArr = input.textContent.split('');
  findTwoDigit(inputArr);

}

function findTwoDigit(arr = []){

  let newArr = arr;
  console.log(newArr);
  if(operators.includes(newArr[0])){
    newArr.unshift(currentResult);
  }
  for(let item of arr){
    if(!operators.includes(arr[0]) && !isNum){
      newArr.splice(-1, 0, item);
      isNum = true;
    }
    if(!operators.includes(arr[0]) && isNum){
      newArr.splice(arr.indexOf(item)-1, 2, arr[arr.indexOf(item)-1]+arr[arr.indexOf(item)]);
      isNum == false;
    }
    if(operators.includes(arr[0])){
      newArr.splice(-1, 0, item);
      isNum = false;
    }
  }
  console.log(newArr);
  return newArr;

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
    case 'add':
      add(first, second);
      break;
    case 'subtract':
      subtract(first,second);
      break;
    case 'multiply':
      multiply(first,second);
      break;
    case 'divide':
      divide(first,second);
      break;
    default:
      break;
  }
}

function reset(){
  input.textContent = '';
  result.textContent = '0';
  isNum = false;
}

