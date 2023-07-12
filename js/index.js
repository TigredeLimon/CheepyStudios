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


/* -- PSEUDOCÓDIGO -- 
Cuando hago CLICK en headerButton hace una FUNCTION
    —> A headerDropdown se le TOGGLE la clase isActive
    —> A headerArrow se le TOGGLE la clase isActive
*/

/*
    ——> Función que añade y quita la clase isActive al menú desplegable
    del header.
*/
const headerButton   = document.querySelector(`.Header-button`)
const headerDropdown = document.querySelector(`.Header-dropdown`)
const headerArrow    = document.querySelector(`.Header-svg`)

headerButton.addEventListener(`click`, ()=>{
    headerDropdown.classList.toggle(`isActive`)
    headerArrow.classList.toggle(`isActive`)
})




/* -- PSEUDOCÓDIGO -- 
Cuando transcurrren 8 segundos, HeroGallery hace una FUNCTION
    —> A galleryActive ++
    —> Si... galleryActive es MAYOR O IGUAL (>=) a 3
        —>galleryActive es IGUAL = 0

    —>A TODAS las galleryImg se les REMOVE la clase isActive
    —>A la galleryImg posicion galleryActive se le ADD la clase
      isActive
*/
/*
    ——> Función que activa un intervalo de 8 segundos, en el
    cual se añade y/o se quita la clase isActive
*/
const galleryImg = document.querySelectorAll(`.Hero-gallery`)

let galleryActive = 0

setInterval(()=>{
    galleryActive++
    if(galleryActive >= 3){
        galleryActive = 0}

    galleryImg.forEach((eachImg, index)=>{
        galleryImg[index].classList.remove(`isActive`)
        galleryImg[galleryActive].classList.add(`isActive`)
    })
}, 8000)


