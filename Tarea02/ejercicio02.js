/*Crea un programa que pida ao usuario que introduza unha idade e amose a seguinte mensaxe en
función do número introducido:
• 0-12: neno
• 13-18: adolescente
• 19-30: xoven
• 31-64: adulto
• 65-100: xubilado
Controla os casos de erro tamén.
Para gardar un valor do usuario utilizamos o seguinte comando: prompt*/

const tuEdad = () => {

    const edad = parseInt(prompt("Introduce tu edad"), 10);

    if(isNaN(edad)) {
        alert("Ese número no es válido. Por favor, inténtalo de nuevo")
    } else {
        let rangoEdad;

        if(edad >= 0 && edad <= 12) {
            rangoEdad= "niño";
        } else if (edad >= 13 && edad <= 18) {
            rangoEdad= "adolescente";
        } else if (edad >= 19 && edad <= 30) {
            rangoEdad= "joven";
        } else if (edad >= 31 && edad <= 64) {
            rangoEdad= "adulto";
        } else if (edad >= 65 && edad <= 100) {
            rangoEdad= "jubilado";
        } else {
            alert("Tu edad no está dentro del rango");
        }

        if(rangoEdad) {
            alert(`Eres ${rangoEdad}`)
        }
        
        //!CON SWITCH/CASE

        /*

        switch (true) {
            case edad>=0 && edad<=12:
                rangoEdad= "niño";
                alert(`Eres ${rangoEdad}`)
                break;

            case edad>=13 && edad<=18:
                rangoEdad= "adolescente";
                alert(`Eres ${rangoEdad}`)
                break;

            case edad>=19 && edad<=30:
                rangoEdad= "joven";
                alert(`Eres ${rangoEdad}`)
                break;

            case edad>=31 && edad<=64:
                rangoEdad= "adulto";
                alert(`Eres ${rangoEdad}`)
                break;

            case edad>=65 && edad<=100:
                rangoEdad= "jubilado";
                alert(`Eres ${rangoEdad}`)
                break;

            default:
                alert("Tu edad no está dentro del rango");
                break;
        }

        */
    }
}