export default function Typehome () {
    

    let arrayCaracteres = 'Michael';

    let separadorCadena = arrayCaracteres.split('');

    let efectoMaquina;

    function repetirCadena () {
        efectoMaquina = setInterval(separadorCadena.forEach(element => {
            console.log(element) })
    
        ), 5000}

    repetirCadena();
    
    }

    
      

/*function maquina (caracteres = '') {
    const elemento = document.createElement("p");

    elemento.setAttribute("class", "titulo");

    elemento.outerHTML = caracteres

    const $contenedor = document.querySelector(texto);

    $contenedor.appendChiled(elemento);
    }    
maquina('Hola')*/


     
    



