/*Co obxecto String de JS realiza as seguintes funcións:
• Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un
prompt) e amose:
◦ O tamaño do nome e dos apelidos.
◦ O tamaño do nome e dos apelidos sen espazos.
◦ O nome e os apelidos en minúsculas.
◦ E en maiúsculas.
◦ Que amose separado Nome, Apelido1 e Apelido2.
◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR
• Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes
premisas:
◦ Entre 8 e 16 caracteres.
◦ Algunha maiúscula.
◦ Algunha minúscula.
◦ Algún número.
◦ Algún caracter especial (_,-,@,#,$,%,&,...)
*/

/*• Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un
prompt) */

const nomeCompleto = prompt("Introduce o teu nome e apelidos: ");

// O tamaño do nome e dos apelidos.
const tamañoNome = nomeCompleto.length;

// O tamaño do nome e dos apelidos sen espazos.
const tamañoNomeSenEspacios = nomeCompleto.replace(/\s/g, "").length;

//◦ O nome e os apelidos en minúsculas.
const enMinusculas = nomeCompleto.toLowerCase();

//◦ E en maiúsculas.
const enMaiusculas = nomeCompleto.toUpperCase();

//◦ Que amose separado Nome, Apelido1 e Apelido2.
const partes = nomeCompleto.split(" ");
const nome = partes[0];
const apelidos = partes.slice(1);

/*◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/
const propostaNome = `${nome.toLowerCase()}${apelidos[0].charAt(0).toUpperCase()}${apelidos[1].charAt(0).toUpperCase()}`

console.log(`Tamaño do nombre e apelidos: ${tamañoNome}`);
console.log(`Tamaño sen espacios: ${tamañoNomeSenEspacios}`);
console.log(`Nome y apelidos en minúsculas: ${enMinusculas}`);
console.log(`Nome y apelidos en maiúsculas: ${enMaiusculas}`);
console.log(`Separado: Nome: ${nome}, Apelido1: ${apelidos[0]}, Apelido2: ${apelidos[1]}`);
console.log(`Proposta de nome de usuario: ${propostaNome}`);

// Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes
// premisas:
// ◦ Entre 8 e 16 caracteres.
// ◦ Algunha maiúscula.
// ◦ Algunha minúscula.
// ◦ Algún número.
// ◦ Algún caracter especial (_,-,@,#,$,%,&,...)

function teuContrasinal() {
    const contrasinal = prompt("Introduce o teu contrasinal: ");

    const verificarContrasinal = (contrasinal) => {
        const lonxitudeValida = contrasinal.length >= 8 && contrasinal.length <= 16;

        const tenMaiuscula = /[A-Z]/.test(contrasinal);
        const tenMinuscula = /[a-z]/.test(contrasinal);
        const tenNumero = /\d/.test(contrasinal);
        const tenCaracterEspecial = /[_\-@#$%&]/.test(contrasinal);

        if (lonxitudeValida && tenMaiuscula && tenMinuscula && tenNumero && tenCaracterEspecial) {
            return true;
        } else {
            return false;
        }
    }

    if(verificarContrasinal(contrasinal)) {
        console.log(`A contrasinal ${contrasinal} cumple cas premisas.`);
    } else {
        console.log(`A contrasinal ${contrasinal} non é válida.`);
    }
}