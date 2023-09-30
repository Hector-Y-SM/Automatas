import './style.css'

//? DOM elementos
const parrafo = document.createElement('p');
const barraPrincipal = document.getElementById("body_mainDiv_opciones"); //bob 1,2
const divInputs = document.createElement('div'); // Contenedor para los inputs
const inputER = document.createElement('input'); // Ingresar expresiones regulares
const inputCadena = document.createElement('textarea'); // Ingresar cadenas test
const btn_verificar = document.createElement('button'); // Botón búsqueda principal
const btn_global = document.createElement('button'); // Botón opción de búsqueda 1
const btn_case = document.createElement('button'); // Botón opción de búsqueda 2
const opt = document.getElementById("body_main_select_opt");
const opt1 = document.getElementById("body_main_select_opt1");
const opt2 = document.getElementById("body_main_select_opt2");
const btn_limpiar = document.createElement('button');
const divBotones = document.createElement('div');
const divInputB = document.createElement('div');

//! Id de los elementos
inputER.id = "inputER";
inputCadena.id = "inputCadena";
btn_verificar.id = 'btn_verificar';
btn_limpiar.id = 'btn_limpiar';
divBotones.id = "div_btns";
divInputB.id = 'div_IB';

//! Textos
inputER.placeholder = 'Ingresa tu expresión regular';
inputCadena.placeholder = '...';
btn_case.textContent = 'case insensitive Global';
btn_verificar.textContent = 'Verificar';
btn_limpiar.textContent = 'Limpiar';
btn_global.textContent = 'global';

//! apend elementos
opt1.append(btn_global);
opt2.append(btn_case);
barraPrincipal.appendChild(btn_limpiar);
divBotones.appendChild(btn_verificar);
divInputB.append(inputER);
divInputB.append(btn_limpiar);
//divBotones.appendChild(btn_limpiar);

btn_verificar.addEventListener('click', function verificacionBasica() {
  let patron = new RegExp(inputER.value); 
  let cadena = inputCadena.value;
  if(opt.selected){ if(patron.test(cadena)) { matchGlobalInsensitive(cadena, inputER.value, '') } }
    else if(opt1.selected) { matchGlobalInsensitive(cadena, inputER.value, 'g') }
    else if(opt2.selected) { matchGlobalInsensitive(cadena, inputER.value, 'gi') }
  else { 
    parrafo.textContent = 'No hizo match'; 
    document.body.appendChild(parrafo);
  }
});

function matchGlobalInsensitive(cadena, input, ERB) { //ERB es la expresión regular que complementa las búsquedas
  let patron = new RegExp(input, ERB); // Agrega la bandera 'g'/'gi' para buscar todas las coincidencias
  let matches = cadena.match(patron); // Utiliza .match() para encontrar todas las coincidencias

  if (matches) {
    // Si se encontraron coincidencias, muestra la cantidad y las posiciones en el texto
    parrafo.textContent = `Se encontraron ${matches.length} coincidencias: ${matches.join(', ')}`;
    document.body.appendChild(parrafo);
  } else {
    parrafo.textContent = 'No se encontraron coincidencias';
    document.body.appendChild(parrafo);
  }
}

// Ajustar el tamaño del textarea automáticamente
inputCadena.addEventListener('input', function () {
  this.style.height = 'auto'; // Restablece la altura a automático
  this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al contenido
});

const initialTextareaHeight = window.getComputedStyle(inputCadena).getPropertyValue('height'); // Guardar el tamaño inicial del textarea
inputCadena.style.resize = 'none'; // Deshabilitar el redimensionamiento manual del textarea

// Limpiar contenido del textarea y restaurar tamaño inicial
btn_limpiar.addEventListener('click', function () {
  inputCadena.value = ''; // Limpia el contenido del textarea
  inputCadena.style.height = initialTextareaHeight; // Restaura el tamaño inicial del textarea
  parrafo.textContent = ''; // Limpia el contenido del párrafo de resultados
});

//* agregar al cuerpo
document.body.appendChild(barraPrincipal);
divInputs.appendChild(divInputB); // Coloca los inputs en el divInputs
divInputs.appendChild(inputCadena);
document.body.appendChild(divInputs); // Agrega el divInputs al cuerpo
document.body.appendChild(divBotones);