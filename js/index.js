'use strict'
/*----------------------------------------
¡Hola! Aquí encontrarás la 
estructura de este archivo .js :-)

——> Interacciones:
    —> 
——> Estructura:
    —> Constantes
    —> Variables
    —> Funciones
----------------------------------------*/


/* 
Cuando hago CLICK en headerButton hace una FUNCTION
A headerDropdown se le TOGGLE la clase isActive
A headerArrow se le TOGGLE la clase isActive

Cuando hago CLICK FUERA de headerButton hace una FUNCTION
A headerDropdown se le QUITA/REMOVE la clase isActive
*/

// TODO: Resolver el tema de quitarle la class al dropdown al clickar fuera del item en sí
const headerButton = document.querySelector(`.Header-button`)
const headerDropdown = document.querySelector(`.Header-dropdown`)
const headerArrow = document.querySelector(`.Header-svg`)

headerButton.addEventListener(`click`, ()=>{
    headerDropdown.classList.toggle(`isActive`)
    headerArrow.classList.toggle(`isActive`)
})



