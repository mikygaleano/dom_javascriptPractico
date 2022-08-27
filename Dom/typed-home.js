import Typed from 'typed.js';
export default  function typedHome(html) {
    const maquina = {
        strings: ["<i>Primeira</i> frase com Typed.js.", "Olá MundoJS!"],
        typeSpeed: 40,
    }
        //let typed = document.querySelector(heading);
        Typed = new Typed ('.element');
        
        texto = document.querySelector(".heading");

        html = texto.outerHTML(maquina);
}
