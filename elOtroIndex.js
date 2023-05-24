// Este código crea una calculadora simple.

// Variables:
var firstValue = '0'; // El primer número ingresado por el usuario.
var secondValue = '0';  // El segundo número ingresado por el usuario.
var result = '';  // El resultado del cálculo.
const simbols = { // Un diccionario que asigna operaciones a símbolos.
  'add': '+',
  'sustract': '-',
  'multiply': '*' ,
  'divide': '/'
};

// Declaraciones:
const app = document.getElementById('root'); // El elemento raíz de la calculadora.

const container = document.createElement('div'); // El elemento contenedor de la calculadora.
container.classList.add('container'); // El elemento contenedor tiene la clase 'container'.

const display = document.createElement('input'); // El elemento de visualización de la calculadora.
display.classList.add('display'); // El elemento de visualización tiene la clase 'display'.
display.type = 'text'; // El elemento de visualización es una entrada de texto.
display.value = '0'; // El valor inicial del elemento de visualización es '0'.
display.readonly = true; // El elemento de visualización es de solo lectura.

const operators = document.createElement('div');
operators.classList.add('operators');

// Este ciclo crea botones para cada operación en el diccionario de símbolos.
for (const [key, value] of Object.entries(simbols)) {
  const key = document.createElement('button');
  key.textContent = value;

  // Este detector de eventos maneja el evento de clic para el botón.
  key.addEventListener('click', () => {
    firstValue = parseFloat(display.value);
    console.log("a " + firstValue)
    display.value = "0";
  
    // Obtiene el primer valor del elemento de visualización
    addEventListener('click', () => {
      secondValue = parseFloat(display.value);
      console.log("b " + secondValue)
      result = firstValue + value + secondValue;
    });
  });
  operators.appendChild(key)
};  

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
  display.value = eval(result);
});

numbers.appendChild(decimal);
numbers.appendChild(clear);
numbers.appendChild(equal);

container.appendChild(display);
container.appendChild(operators);
container.appendChild(numbers);

app.appendChild(container);
