function validaNumeros(n1, n2) {
  if (n1 === 0 || n2 === 0) {
    alert('El numero debe ser mayor que 0');
    return false;
  }
  if (n1 === n2) {
    alert('Los numeros deben ser distintos')
    return false;
  }
  return true;
}


//es la sentencia basica de una fun
function suma(){
  var num1 = prompt ('Ingrese numero 1');
  num1 = parseFloat (num1);
  var num2 = prompt ('Ingrese Numero 2');
  num2 = parseFloat (num2);
  if (validaNumeros(num1, num2)) {
    alert (`la resta es: ${num1-num2}`)
  }
}
function resta(){
  var num1 = prompt ('Ingrese numero 1');
  num1 = parseFloat (num1);
  var num2 = prompt ('Ingrese Numero 2');
  num2 = parseFloat (num2);
  if (validaNumeros(num1, num2)) {
    alert (`la resta es: ${num1-num2}`)
  }
}
function divicion(){
  var num1 = prompt('Ingrese numero 1');
  num1 = parseFloat(num1);
  var num2 = prompt('Ingrese Numero 2');
  num2 = parseFloat(num2);
  if (validaNumeros(num1, num2)) {
    alert (`la divicion es: ${num1/num2}`)
  }
}
function mult(){
  var num1 = prompt('Ingrese numero 1');
  num1 = parseFloat(num1);
  var num2 = prompt('Ingrese Numero 2');
  num2 = parseFloat(num2);
  if (validaNumeros(num1, num2)) {
  alert (`la multiplicacion es: ${num1*num2}`)
  }
}
function modulo(){
  var num1 = prompt('Ingrese numero 1');
  num1 = parseFloat(num1);
  var num2 = prompt('Ingrese Numero 2');
  num2 = parseFloat(num2);
  if (validaNumeros(num1, num2)) {
  alert (`El modulo es: ${num1*num2}`)
  }
}
function kelvin(){
  var cel1 = prompt ('Ingrese grados celsius');
  cel1 = parseFloat (cel1);
  alert (`los grados Kelvin son: ${cel1+273.15} K`)
}
function fahrenheit(){
  var fahr1 = prompt ('Ingrese grados celsius');
  fahr1= parseFloat (fahr1);
  alert (`los grados Fahrenheit son: ${(fahr1*9/5)+32} ºF`)
}


$('#suma').click(function(){
  suma()
})
$('#resta').click(function(){
  resta()
})
$('#divicion').click(function(){
  divicion()
})
$('#mult').click(function(){
  mult()
})
$('#modulo').click(function(){
  modulo()
})
$('#kelvin').click(function(){
  kelvin()
})
$('#fahrenheit').click(function(){
  fahrenheit()
})