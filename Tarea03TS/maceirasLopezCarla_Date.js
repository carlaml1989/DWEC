//Días ata final de curso
var fechaHoxe = new Date();
var fechaFinCurso = new Date('2024-06-25');
var diferencia = fechaFinCurso.getTime() - fechaHoxe.getTime();
var diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
console.log('Número de días restantes ata fin de curso', diasRestantes);
//Cumpleanos en fin de semana
function cumpleanosFinDeSemana(mes, dia, anoInicio, anoFin) {
    for (var ano = anoInicio; ano <= anoFin; ano++) {
        var fechaCumpleanos = new Date(ano, mes - 1, dia);
        var diaSemana = fechaCumpleanos.getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            console.log("O ".concat(dia, "/").concat(mes, "/").concat(ano, " es fin de semana."));
        }
    }
}
var mesCumple = 8;
var diaCumple = 28;
var anoInicio = new Date().getFullYear();
var anoFin = 2100;
console.log(cumpleanosFinDeSemana(mesCumple, diaCumple, anoInicio, anoFin));
//Data actual en diferentes formatos
function fechasDiferenteFormato(formato) {
    var fechaActual = new Date();
    var resultado = '';
    switch (formato) {
        case 1:
            //Formato: 17/02/2016
            resultado = "".concat(fechaActual.getDate(), "/").concat(fechaActual.getMonth() + 1, "/").concat(fechaActual.getFullYear());
            break;
        case 2:
            // Formato: Mércores, 17 de febreiro de 2016
            var opcionFecha2 = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            resultado = fechaActual.toLocaleDateString('gl-ES', opcionFecha2);
            break;
        case 3:
            // Formato: Wednesday, February 17, 2016
            var opcionFecha3 = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            resultado = fechaActual.toLocaleDateString('en-US', opcionFecha3);
            break;
        default:
            resultado = 'Formato non válido';
    }
    console.log(resultado);
}
fechasDiferenteFormato(1);
fechasDiferenteFormato(2);
fechasDiferenteFormato(3);
//Hora actual en diferentes formatos
function mostrarHoraEnFormato(formato) {
    var horaActual = new Date();
    var resultado = '';
    switch (formato) {
        case 1:
            // Formato: 14:35:07 (hora detallada con minutos e segundos)
            resultado = "".concat(horaActual.getHours(), ":").concat(horaActual.getMinutes(), ":").concat(horaActual.getSeconds());
            break;
        case 2:
            // Formato: 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM)
            resultado = horaActual.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            break;
        default:
            resultado = 'Formato no válido';
    }
    console.log(resultado);
}
mostrarHoraEnFormato(1);
mostrarHoraEnFormato(2);
