function add(...num){
    let sum = 0;
  for (const value of num) {
    sum += value;
  }
  return sum;
}

function subtract(...num){
    let result = 0;
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
  for (const value of num) {
    let result =  value;
  }
  return result;
}

