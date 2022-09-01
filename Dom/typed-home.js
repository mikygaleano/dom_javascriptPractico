export default function Typehome () {
    

    function repetirCadena (arrayCaracteres = '') {
        let separadorCadena = arrayCaracteres.split('');
        efectoMaquina = setInterval(
            separadorCadena.forEach(element => {
                let maquina = element
                let $texto = document.getElementById("texto").value;
                let etiqueta = document.createElement("p");

                etiqueta.outerHTML = maquina;
                $texto.appendChild(etiqueta);
            }, 3000)
    
        )}

    repetirCadena("Michael");
    
    }

    
      

     
    



