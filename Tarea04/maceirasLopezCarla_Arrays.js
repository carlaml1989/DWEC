let paises = ["España", "Francia", "Alemania", "Italia", "Portugal"];

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
  console.log("Países en sentido inverso:", paises.slice().reverse());
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
  const eliminadoAlPrincipio = paises.shift();
  console.log("Elemento eliminado al principio:", eliminadoAlPrincipio);
  console.log("Array después de eliminar un elemento al principio:", paises);
}

// Función para eliminar un elemento al final del Array e indicar cuál fue
function eliminarAlFinal() {
  const eliminadoAlFinal = paises.pop();
  console.log("Elemento eliminado al final:", eliminadoAlFinal);
  console.log("Array después de eliminar un elemento al final:", paises);
}

// Función para mostrar el elemento en una posición indicada por el usuario
function mostrarElementoEnPosicion(posicion) {
  console.log(`Elemento en la posición ${posicion}:`, paises[posicion]);
}

// Función para mostrar la posición de un elemento indicado por el usuario
function mostrarPosicionDeElemento(elemento) {
  const posicionElemento = paises.indexOf(elemento);
  console.log(`Posición de ${elemento}:`, posicionElemento);
}

// Función para mostrar los elementos entre dos posiciones indicadas por el usuario
function mostrarElementosEntrePosiciones(inicio, fin) {
  const elementosEntrePosiciones = paises.slice(inicio, fin + 1);
  console.log(`Elementos entre las posiciones ${inicio} y ${fin}:`, elementosEntrePosiciones);
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
