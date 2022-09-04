export default function Typehome (texto) {
    
let $etiquetaDelDom = document.querySelector(texto);
/*let etiquetaNueva = document.createElement('p');*/
let arrayCaracteres = ['Michael Nicolas Galeano', 'Programador',
                       'Full stack developer web']


function delEscritor () {
  for (let i = 0; i < arrayCaracteres.length; i++) {
    if (i < 0) {
      $etiquetaDelDom.innerHTML = arrayCaracteres.substring(0, i++);
      setTimeout(function () {
        delEscritor();
      }, 40)
    }
  }
}

function maquinaDeEscribir (text, i) {
  if (i < text.length + 1) {
    $etiquetaDelDom.innerHTML = text.substring(0, i++);
    setTimeout(function () {
      maquinaDeEscribir (text, i++)
    }, 100)
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delEscritor(text, i)
    }, 1000);
  };

}

function empezarEscribir (i) {
  if (typeof arrayCaracteres[i] == 'undefined') {
    setTimeout(function () {
      empezarEscribir(0);
    }, 1000)
  } else if (i < arrayCaracteres[i].length +1) {
    maquinaDeEscribir(arrayCaracteres[i], 0,function() {
      empezarEscribir(i + 1)
    });
  };

}

setTimeout(function() {
  empezarEscribir(0)
}, 1000)

    

}

