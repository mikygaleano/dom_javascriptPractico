export default function Typehome (texto) {
    
let $etiquetaDelDom = document.querySelector(texto);
let etiquetaNueva = document.createElement('p');


function efectoMaquina (arrayCaracteres = [], insertar, set) {
    arrayCaracteres = [
    'Michael Nicolas Galeano', 'programador',
    'Full stack developer web'];
    insertar = arrayCaracteres.forEach
    (Element => etiquetaNueva.innerHTML += Element.split(''))

        set = setInterval(function () {
        $etiquetaDelDom.appendChild(etiquetaNueva);
        console.log($etiquetaDelDom)    
    }, 300)

    
        let stop = set

}

efectoMaquina(;

}     
    



