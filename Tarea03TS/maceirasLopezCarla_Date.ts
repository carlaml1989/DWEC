//Días ata final de curso

let fechaHoxe: Date = new Date();

let fechaFinCurso: Date = new Date('2024-06-25');

let diferencia: number = fechaFinCurso.getTime() - fechaHoxe.getTime();

let diasRestantes: number = Math.floor(diferencia / (1000 * 60 * 60 * 24));

console.log('Número de días restantes ata fin de curso', diasRestantes);

//Cumpleanos en fin de semana

function cumpleanosFinDeSemana(mes: number, dia: number, anoInicio: number, anoFin: number): void{
    for (let ano = anoInicio; ano <= anoFin; ano++) {
        const fechaCumpleanos: Date = new Date(ano, mes - 1, dia);
        const diaSemana: number  = fechaCumpleanos.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            console.log(`O ${dia}/${mes}/${ano} es fin de semana.`);
        }
    }
}
const mesCumple: number = 8;
const diaCumple: number = 28;
const anoInicio: number = new Date().getFullYear();
const anoFin: number = 2100;

console.log(cumpleanosFinDeSemana(mesCumple, diaCumple, anoInicio, anoFin));

//Data actual en diferentes formatos

function fechasDiferenteFormato(formato: number): void {
    const fechaActual: Date = new Date();
    let resultado: string = '';

    switch (formato) {
        case 1:
            //Formato: 17/02/2016
            resultado = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
            break;
        case 2:
            // Formato: Mércores, 17 de febreiro de 2016
            const opcionFecha2: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
            resultado = fechaActual.toLocaleDateString('gl-ES', opcionFecha2);
            break;
        case 3:
            // Formato: Wednesday, February 17, 2016
            const opcionFecha3: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year:'numeric'}
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

function mostrarHoraEnFormato(formato: number): void {
    const horaActual: Date = new Date();
    let resultado: string = '';
  
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