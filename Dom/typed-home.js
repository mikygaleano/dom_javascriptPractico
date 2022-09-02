export default function Typehome (texto) {
    
let $etiquetaDelDom = document.querySelector(texto);
let etiquetaNueva = document.createElement('p');


function efectoMaquina (arrayCaracteres = [], insertar, set) {
    arrayCaracteres = [
    'Michael Nicolas Galeano', 'programador',
    'Full stack developer web'];
    insertar = arrayCaracteres.forEach
    (Element => etiquetaNueva.innerHTML += Element.split(''))

    let fragmento = $etiquetaDelDom.appendChild(etiquetaNueva);
        console.log($etiquetaDelDom)

     function set () {
        fragmento;
        console.log($etiquetaDelDom);
    }

    function stop () {
        clearInterval(set);
        set = null;
    }


    if (!$etiquetaDelDom) {
        return set;
    }
    else {
        return stop();
    }


}

efectoMaquina();

}     
    



