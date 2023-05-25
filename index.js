// Curso ReactJS 2023 para el Informatorio Chaco.
// Alumno: Lucas Meneses.
// Este código crea una calculadora simple.

// Variables:
var firstValue = '0'; // El primer número ingresado por el usuario.
var secondValue = '0'; // El segundo número ingresado por el usuario.
var result = ''; // El resultado del cálculo.
const simbols = { // Un diccionario que mapea operaciones a símbolos.
  'add': '+',
  'subtract': '-',
  'multiply': '*',
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

const operators = document.createElement('div'); // El elemento de operadores de la calculadora.
operators.classList.add('operators'); // El elemento de operadores tiene la clase 'operators'.

// Este bucle crea botones para cada operación en el diccionario simbols.
for (const [key, value] of Object.entries(simbols)) {
  // Crea un elemento de botón.
  const key = document.createElement('button');

  // Establezca el texto del botón en el símbolo de operación.
  key.textContent = value;
  
  // Este controlador de eventos maneja el evento click del botón.
  key.addEventListener('click', () => {
    // Obtenga el primer valor del elemento de visualización.
    firstValue = parseFloat(display.value);
    console.log("a " + firstValue) // Debug.
    
    // Limpie el elemento de visualización.
    display.value = "0";

    // Agrega un controlador de evento para el evento click en el botón.
    addEventListener('click', () => {
      // Obtenga el segundo valor del elemento de visualización.
      secondValue = parseFloat(display.value);
      console.log("b " + secondValue) // Debug.
      
      // Calcular el resultado.
      result = firstValue + value + secondValue;
    });
  });
  operators.appendChild(key); // Apunta el botón al elemento de operadores.
};

// Este bloque crea un elemento div para los botones de los números.
const numbers = document.createElement('div');
numbers.classList.add('numbers');

// Este bucle crea un botón para cada número del 0 al 9.
for (let i = 9; i >= 0; i--) {
  // Crea un elemento de botón.
  const button = document.createElement('button');

  // Establece el texto del botón en el número correspondiente.
  button.textContent = i;

  // Agrega un controlador de evento para el evento click del botón.
  button.addEventListener('click', () => {
    // Si el valor del elemento de visualización es 0, límpielo.
    if (display.value == '0') {
      display.value = '';
    }

    // Agrega el número al valor del elemento de visualización.
    display.value += i;
  });

  // Agrega el botón al elemento numbers.
  numbers.appendChild(button);
}


// Este elemento crea unun botón para el punto decimal.
const decimal = document.createElement('button');
decimal.textContent = '.';
decimal.addEventListener('click', () => {
  display.value += '.';
});

// Este elemento crea un botón para borrar la pantalla.
const clear = document.createElement('button');
clear.textContent = 'C';
clear.addEventListener('click', () => {
  display.value = '0';
});

// Este elemento crea un botón para evaluar la expresión.
const equal = document.createElement('button');
equal.textContent = '=';
equal.addEventListener('click', () => {
  display.value = eval(result);
});


// Este elemento crea un botón para cambiar entre el modo claro y oscuro.
const modeButton = document.createElement('button');
modeButton.textContent = 'Modo Oscuro';
modeButton.setAttribute('data-mode', 'dark');
modeButton.addEventListener('click', () => {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    modeButton.textContent = 'Modo Oscuro';
  } else {
    body.classList.add('dark-mode');
    modeButton.textContent = 'Modo Claro';
  }
});

/**/
// elementoObjetivo.insertAdjacentElement(posición, elemento);


// Este elemento agrega el elemento de visualización, el elemento de operadores y el elemento de números al elemento de contenedor.
container.appendChild(display);
container.appendChild(operators);
container.appendChild(numbers);

// Este elemento agrega los botones decimal y clear al elemento numbers.
numbers.appendChild(decimal);
numbers.appendChild(clear);

// Este elemento agrega el botón igual al elemento numbers.
numbers.appendChild(equal);


// Este elemento agrega el botón de modo al cuerpo del documento.
container.appendChild(modeButton);

// Este elemento agrega el elemento de contenedor al elemento raíz.
app.appendChild(container); 