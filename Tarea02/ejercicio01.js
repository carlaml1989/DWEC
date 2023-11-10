/* Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte: */

//Táboa de multiplicar do 9.
const tablaNueve = () => {
    this.event.preventDefault();
    const numero = 9;

    const tabla9= [];
    
    for(let i=0; i<= 10; i++) {
        const tablaCompleta = numero * i;
        tabla9.push(`9 x ${i} = ${tablaCompleta}`)
    };
    document.getElementById("resultadoTabla").textContent = tabla9;
};


//10 primeiros números da sucesión de Fibonacci.

const fibonacci = () => {
    const n = 10;
    const secuenciaFibo = [0,1];
    let i = 2;

    do{
        const next = secuenciaFibo[i - 1] + secuenciaFibo[i - 2];
        secuenciaFibo.push(next);
        i++;
    } while (i < n);
    
    document.getElementById("secuencia").textContent = secuenciaFibo; 
};

//Indicar se un número é primo ou non. A entrada de datos podes facela como queiras

const numerosPrimos = () => {
    const numeroSeleccionado = parseInt(document.getElementById("numeroInput").value)

    if(esPrimo(numeroSeleccionado)) {
        document.getElementById("resultado").textContent = numeroSeleccionado + " es un número primo."
    } else {
        document.getElementById("resultado").textContent = numeroSeleccionado + " NO es un número primo."
    };
}
const esPrimo = (numeroSeleccionado) => {
    if (numeroSeleccionado <= 1) return false;
        if (numeroSeleccionado <= 3) return true;
        if (numeroSeleccionado % 2 === 0 || numeroSeleccionado % 3 === 0) return false;

    let i = 5;

    while ((i * i <= numeroSeleccionado)) {
        if (numeroSeleccionado % i === 0 || numeroSeleccionado % (i +2) === 0) return false;
        i += 6;
    }

    return true;
}

