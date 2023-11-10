/*Tendo en conta que cando desprazamos 1 bit á dereita facemos a división enteira por 2 e cando o
desprazamos á esquerda estamos multiplicando por 2, imprime tamén o resultado das seguintes
operacións empregando desprazamento de bits. Podes mesturar operadores de asignación e tamén
operadores propios de bit a bit.
• 125 / 8
• 40 x 4
• 25 / 2
• 10 x 16*/

const desplazandoBits = () => {
    // 125 / 8
    let resultado1 = 125 >> 3;
    document.getElementById("resultado-1").textContent = resultado1;

    // 40 x 4
    let resultado2 = 40 << 2;
    document.getElementById("resultado-2").textContent = resultado2;

    // 25 / 2
    let resultado3 = 25 >> 1;
    document.getElementById("resultado-3").textContent = resultado3;

    // 10 x 16
    let resultado4 = 10 << 4;
    document.getElementById("resultado-4").textContent = resultado4;
}

