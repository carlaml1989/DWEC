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
var nomeCompleto = prompt("Introduce o teu nome e apelidos: ");
// O tamaño do nome e dos apelidos.
if (nomeCompleto !== null) {
    var tamañoNome = nomeCompleto.length;
    // O tamaño do nome e dos apelidos sen espazos.
    var tamañoNomeSenEspacios = nomeCompleto.replace(/\s/g, "").length;
    //◦ O nome e os apelidos en minúsculas.
    var enMinusculas = nomeCompleto.toLowerCase();
    //◦ E en maiúsculas.
    var enMaiusculas = nomeCompleto.toUpperCase();
    //◦ Que amose separado Nome, Apelido1 e Apelido2.
    var partes = nomeCompleto.split(" ");
    var nome = partes[0];
    var apelidos = partes.slice(1);
    /*◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do
    primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
    maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/
    var propostaNome = "".concat(nome.toLowerCase()).concat(apelidos[0].charAt(0).toUpperCase()).concat(apelidos[1].charAt(0).toUpperCase());
    console.log("Tama\u00F1o do nombre e apelidos: ".concat(tamañoNome));
    console.log("Tama\u00F1o sen espacios: ".concat(tamañoNomeSenEspacios));
    console.log("Nome y apelidos en min\u00FAsculas: ".concat(enMinusculas));
    console.log("Nome y apelidos en mai\u00FAsculas: ".concat(enMaiusculas));
    console.log("Separado: Nome: ".concat(nome, ", Apelido1: ").concat(apelidos[0], ", Apelido2: ").concat(apelidos[1]));
    console.log("Proposta de nome de usuario: ".concat(propostaNome));
}
else {
    console.log("O usuario cancelou a entrada");
}
// Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes
// premisas:
// ◦ Entre 8 e 16 caracteres.
// ◦ Algunha maiúscula.
// ◦ Algunha minúscula.
// ◦ Algún número.
// ◦ Algún caracter especial (_,-,@,#,$,%,&,...)
function teuContrasinal() {
    var contrasinal = prompt("Introduce o teu contrasinal: ");
    var verificarContrasinal = function (contrasinal) {
        var lonxitudeValida = contrasinal.length >= 8 && contrasinal.length <= 16;
        var tenMaiuscula = /[A-Z]/.test(contrasinal);
        var tenMinuscula = /[a-z]/.test(contrasinal);
        var tenNumero = /\d/.test(contrasinal);
        var tenCaracterEspecial = /[_\-@#$%&]/.test(contrasinal);
        if (lonxitudeValida && tenMaiuscula && tenMinuscula && tenNumero && tenCaracterEspecial) {
            return true;
        }
        else {
            return false;
        }
    };
    if (verificarContrasinal(contrasinal)) {
        console.log("A contrasinal ".concat(contrasinal, " cumple cas premisas."));
    }
    else {
        console.log("A contrasinal ".concat(contrasinal, " non \u00E9 v\u00E1lida."));
    }
}
