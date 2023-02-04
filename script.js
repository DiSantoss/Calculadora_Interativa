

var nbill = document.getElementById('nbill');
var porcent1 = document.getElementById('num1');
var porcent2 = document.getElementById('num2');
var porcent3 = document.getElementById('num3');
var porcent4 = document.getElementById('num4');
var porcent5 = document.getElementById('num5');
var people = document.getElementById('np');
var tipamount = document.getElementById('n-amount1');



function calcular(event) {
    
    var resultado1 = parseFloat(nbill.value)/parseFloat(people.value);

    tipamount.innerHTML = resultado1;
}


