// /*Co obxecto Date realiza as seguintes funcións:
//     • Amosar o número de días que quedan dende hoxe (día actual) ata final de
//     curso (por exemplo, o 25 de Xuño).
//     • Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no
//     que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
//     • Amosa a data actual en diferentes formatos segundo o valor que meta o
//     usuario por parámetro (usa un switch):
//         1. 17/02/2016
//         2. Mércores, 17 de febreiro de 2016
//         3. Wednesday, February 17, 2016.
//     • Amosa a hora actual en diferentes formatos segundo o valor que meta o
//     usuario por parámetro (usa un switch):
//         1. 14:35:07 (hora detallada con minutos e segundos)
//         2. 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes
//         ou despois de mediodía).*/

//Días ata final de curso

let fechaHoxe = new Date();

let fechaFinCurso = new Date('2024-06-25');

let diferencia = fechaFinCurso - fechaHoxe;

let diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));

console.log('Número de días restantes ata fin de curso', diasRestantes);

//Cumpleanos en fin de semana

function cumpleanosFinDeSemana(mes, dia, anoInicio, anoFin) {
    for (let ano = anoInicio; ano <= anoFin; ano++) {
        const fechaCumpleanos = new Date(ano, mes - 1, dia);
        const diaSemana  = fechaCumpleanos.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            console.log(`O ${dia}/${mes}/${ano} es fin de semana.`);
        }
    }
}
const mesCumple = 8;
const diaCumple = 28;
const anoInicio = new Date().getFullYear();
const anoFin = 2100;

console.log(cumpleanosFinDeSemana(mesCumple, diaCumple, anoInicio, anoFin));

//Data actual en diferentes formatos

function fechasDiferenteFormato(formato) {
    const fechaActual = new Date();
    let resultado = '';

    switch (formato) {
        case 1:
            //Formato: 17/02/2016
            resultado = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
            break;
        case 2:
            // Formato: Mércores, 17 de febreiro de 2016
            const opcionFecha2 = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
            resultado = fechaActual.toLocaleDateString('gl-ES', opcionFecha2);
            break;
        case 3:
            // Formato: Wednesday, February 17, 2016
            const opcionFecha3 = { weekday: 'long', month: 'long', day: 'numeric', year:'numeric'}
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
    const horaActual = new Date();
    let resultado = '';
  
    switch (formato) {
      case 1:
        // Formato: 14:35:07 (hora detallada con minutos e segundos)
        resultado = `${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}`;
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
  