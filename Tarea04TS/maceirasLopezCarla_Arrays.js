var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var paises = ["España", "Francia", "Alemania", "Italia", "Portugal"];
// Función para mostrar el número de elementos del Array
function mostrarNumeroElementos() {
    console.log("Número de elementos en el Array:", paises.length);
}
// Función para mostrar todos los países
function mostrarTodosLosPaises() {
    console.log("Países:", paises);
}
// Función para mostrar todos los países en sentido inverso
function mostrarPaisesEnSentidoInverso() {
    console.log("Países en sentido inverso:", __spreadArray([], paises, true).reverse());
}
// Función para añadir un país al principio del Array
function agregarPaisAlPrincipio(pais) {
    paises.unshift(pais);
    console.log("Array después de añadir un país al principio:", paises);
}
// Función para añadir un país al final del Array
function agregarPaisAlFinal(pais) {
    paises.push(pais);
    console.log("Array después de añadir un país al final:", paises);
}
// Función para eliminar un elemento al principio del Array e indicar cuál fue
function eliminarAlPrincipio() {
    var eliminadoAlPrincipio = paises.shift();
    console.log("Elemento eliminado al principio:", eliminadoAlPrincipio);
    console.log("Array después de eliminar un elemento al principio:", paises);
}
// Función para eliminar un elemento al final del Array e indicar cuál fue
function eliminarAlFinal() {
    var eliminadoAlFinal = paises.pop();
    console.log("Elemento eliminado al final:", eliminadoAlFinal);
    console.log("Array después de eliminar un elemento al final:", paises);
}
// Función para mostrar el elemento en una posición indicada por el usuario
function mostrarElementoEnPosicion(posicion) {
    console.log("Elemento en la posici\u00F3n ".concat(posicion, ":"), paises[posicion]);
}
// Función para mostrar la posición de un elemento indicado por el usuario
function mostrarPosicionDeElemento(elemento) {
    var posicionElemento = paises.indexOf(elemento);
    console.log("Posici\u00F3n de ".concat(elemento, ":"), posicionElemento);
}
// Función para mostrar los elementos entre dos posiciones indicadas por el usuario
function mostrarElementosEntrePosiciones(inicio, fin) {
    var elementosEntrePosiciones = paises.slice(inicio, fin + 1);
    console.log("Elementos entre las posiciones ".concat(inicio, " y ").concat(fin, ":"), elementosEntrePosiciones);
}
// Ejecutar las funciones según sea necesario
mostrarNumeroElementos();
mostrarTodosLosPaises();
mostrarPaisesEnSentidoInverso();
agregarPaisAlPrincipio("Argentina");
agregarPaisAlFinal("Australia");
eliminarAlPrincipio();
eliminarAlFinal();
mostrarElementoEnPosicion(2);
mostrarPosicionDeElemento("Italia");
mostrarElementosEntrePosiciones(1, 3);
