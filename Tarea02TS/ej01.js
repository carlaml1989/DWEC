/* Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte: */
//Táboa de multiplicar do 9.
var tablaNueve = function () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var numero = 9;
    var tabla9 = [];
    for (var i = 0; i <= 10; i++) {
        var tablaCompleta = numero * i;
        tabla9.push("9 x ".concat(i, " = ").concat(tablaCompleta));
    }
    ;
    var resultadoTablaElement = document.getElementById("resultadoTabla");
    if (resultadoTablaElement) {
        resultadoTablaElement.textContent = tabla9.join(' ');
    }
};
//10 primeiros números da sucesión de Fibonacci.
var fibonacci = function () {
    var n = 10;
    var secuenciaFibo = [0, 1];
    var i = 2;
    do {
        var next = secuenciaFibo[i - 1] + secuenciaFibo[i - 2];
        secuenciaFibo.push(next);
        i++;
    } while (i < n);
    var secuenciaElement = document.getElementById("secuencia");
    if (secuenciaElement) {
        secuenciaElement.textContent = secuenciaFibo.join(',');
    }
};
//Indicar se un número é primo ou non. A entrada de datos podes facela como queiras
var numerosPrimos = function () {
    var _a;
    var numeroSeleccionado = parseInt(((_a = document.getElementById("numeroInput")) === null || _a === void 0 ? void 0 : _a.value) || '', 10);
    var numeroSeleccionadoElement = document.getElementById("resultado");
    if (esPrimo(numeroSeleccionado)) {
        if (numeroSeleccionadoElement) {
            numeroSeleccionadoElement.textContent = numeroSeleccionado + " es un número primo.";
        }
    }
    else {
        if (numeroSeleccionadoElement) {
            numeroSeleccionadoElement.textContent = numeroSeleccionado + " NO es un número primo.";
        }
    }
    ;
};
var esPrimo = function (numeroSeleccionado) {
    if (numeroSeleccionado <= 1)
        return false;
    if (numeroSeleccionado <= 3)
        return true;
    if (numeroSeleccionado % 2 === 0 || numeroSeleccionado % 3 === 0)
        return false;
    var i = 5;
    while ((i * i <= numeroSeleccionado)) {
        if (numeroSeleccionado % i === 0 || numeroSeleccionado % (i + 2) === 0)
            return false;
        i += 6;
    }
    return true;
};
