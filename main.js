import './style.css'

//DOM elementos
const parrafo = document.createElement('p');
const infParrafo = document.createElement('p');
const input = document.createElement('input');
const btn_verificar = document.createElement('button');
btn_verificar.textContent = 'Verificar';

//! Forma sensilla de testear cadenas
const cadena = 'aprendiendo expresiones regulares'; //0001001010ññññ
let patron = ''; //! /[01]+/     true
//let patron  = new RegExp('a$'); forma distinta de crear expresiones regulares

infParrafo.textContent = 'testear: '+ cadena;
btn_verificar.addEventListener('click', function verificacion() 
{
  patron = new RegExp(input.value); //como sacamos el valor del txtbox literal, no podemos usar /'valorCualquiera'/ con input.valor por ejemplo, asi se crea mejor¿
  if(patron.test(cadena))
  {
    parrafo.textContent = 'Si hizo math';
    //console.log('entre');
  } else 
  { 
    parrafo.textContent = 'No hizo math'; 
    //console.log('falso');
  }
});

document.body.appendChild(infParrafo);
document.body.appendChild(parrafo);
document.body.appendChild(input);
document.body.appendChild(btn_verificar);
