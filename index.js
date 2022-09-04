import scrollTopButton from "./Dom/boton-scroll.js";
import hamburgerMenu from "./Dom/menu-hamburguesa.js";
import Typehome from "./Dom/typed-home.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    scrollTopButton(".scroll-top-bt");

    Typehome(".texto")

})

;



