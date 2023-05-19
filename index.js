const app = document.getElementById('root');

const container = document.createElement('div');
container.classList.add('container');

const display = document.createElement('input');
display.classList.add('display');
display.type = 'text';
display.value = '0';
display.readonly = true;

const operators = document.createElement('div');
operators.classList.add('operators');


var firstValue = '0';
var secondValue = '0';
var operation = '';

const add = document.createElement('button');
add.textContent = '+';
add.addEventListener('click', () => {
  const firstValue = parseFloat(display.value);
  const secondValue = parseFloat(prompt('Ingrese un número a operar: '));
  display.value = firstValue + secondValue;
});

const subtract = document.createElement('button');
subtract.textContent = '-';
//function resta(){
subtract.addEventListener('click', () => {
  firstValue = parseFloat(display.value);
  console.log("a " + firstValue)
  display.value = "0";
  addEventListener('click', () => {
    secondValue = parseFloat(display.value);
    console.log("b " + secondValue)
  });
});
//return firstValue + operation + secondValue;

const multiply = document.createElement('button');
multiply.textContent = '*';
multiply.addEventListener('click', () => {
  const firstValue = parseFloat(display.value);
  const secondValue = parseFloat(prompt('Ingrese un número a operar: '));
  display.value = firstValue * secondValue;
});

const divide = document.createElement('button');
divide.textContent = '/';
divide.addEventListener('click', () => {
  const firstValue = parseFloat(display.value);
  const secondValue = parseFloat(prompt('Ingrese un número a operar: '));
  display.value = firstValue / secondValue;
});

operators.appendChild(add);
operators.appendChild(subtract);
operators.appendChild(multiply);
operators.appendChild(divide);

const numbers = document.createElement('div');
numbers.classList.add('numbers');

for (let i = 9; i >= 0; i--) {
  const button = document.createElement('button');
  button.textContent = i;
  button.addEventListener('click', () => {
    if (display.value == '0'){
      display.value = '';
    }
    display.value += i;
  });
  numbers.appendChild(button);
}

const decimal = document.createElement('button');
decimal.textContent = '.';
decimal.addEventListener('click', () => {
  display.value += '.';
});

const clear = document.createElement('button');
clear.textContent = 'C';
clear.addEventListener('click', () => {
  display.value = '0';
});

const equal = document.createElement('button');
equal.textContent = '=';
equal.addEventListener('click', () => {
  eval()
});

numbers.appendChild(decimal);
numbers.appendChild(clear);
numbers.appendChild(equal);

container.appendChild(display);
container.appendChild(operators);
container.appendChild(numbers);

app.appendChild(container);