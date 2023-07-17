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

Cuando hago CLICK en responsiveSvg hace una FUNCTION
    —> A responsiveMenu se le TOGGLE la clase isActive

Cuando hago CLICK en htmlBody hace una FUNCTION 
    —> A headerDropdown se le REMOVE la clase isActive
    —> A headerArrow se le REMOVE la clase isActive 
    —> A responsiveMenu se le REMOVE la clase isActive
*/

/*
——> Función que añade y quita la clase isActive al menú desplegable
del header
——> Función que quita la clase isActive al clickar en el Body
——> See: https://stackoverflow.com/questions/26672241/remove-class-after-click-outside-the-div
*/
const headerButton   = document.querySelector(`.Header-button`)
const headerDropdown = document.querySelector(`.Header-dropdown`)
const headerArrow    = document.querySelector(`.Header-svg`)
const responsiveSvg  = document.querySelector(`.Responsive-svg`)
const responsiveMenu = document.querySelector(`.Responsive-menu`)

const htmlBody = document.querySelector(`body`)
const htmlMain = document.querySelector(`.Main`)

headerButton.addEventListener(`click`, (e)=>{
    headerDropdown.classList.toggle(`isActive`)
    headerArrow.classList.toggle(`isActive`)
    e.stopPropagation()
})

htmlBody.addEventListener(`click`, ()=>{
    if(headerDropdown.classList.contains(`isActive`) && headerArrow.classList.contains(`isActive`))
    {headerDropdown.classList.remove(`isActive`)
    headerArrow.classList.remove(`isActive`)}
})

responsiveSvg.addEventListener(`click`, (e)=>{
    responsiveMenu.classList.toggle(`isActive`)
    e.stopPropagation()
})

htmlMain.addEventListener(`click`, ()=>{
    if(responsiveMenu.classList.contains(`isActive`)){
        responsiveMenu.classList.remove(`isActive`)
    }
})


/* -- PSEUDOCÓDIGO -- 
Cuando hago CLICK en galleryImg, hace una FUNCTION
    —> A lightbox se le ADD la clase isActive

Cuando hago CLICK en galleryClose, hace una FUNCTION    
    —> A lightbox se le DELETE la clase isActive

*/

const galleryImg   = document.querySelectorAll(`.Gallery-img`)
const galleryClose = document.querySelector(`.Lightbox-close`)
const lightbox     = document.querySelector(`.Lightbox`)

galleryImg.forEach((eachImg, index)=>{
    galleryImg[index].addEventListener(`click`, ()=>{
        lightbox.classList.add(`isActive`)
    })
})
galleryClose.addEventListener(`click`, ()=>{
    lightbox.classList.remove(`isActive`)
})



/* -- PSEUDOCÓDIGO -- 
Cuando hago CLICK en buttonPrev, hace una FUNCTION
    —> A itemActive--

    —> Si... itemActive <= -1
       —> itemActive = 6
    
    —> A TODAS las imgList se le REMOVE la clase isActive
    —> A imgList posición Index se le TOGGLE la clase isActive
    —> A TODAS las descList se le REMOVE la clase isActive
    —> A descList se le ADD la clase isActive

Cuando hago CLICK en buttonNext, hace una FUNCTION
    —> A itemActive++

    —> Si... itemActive >= 7
       —> itemActive = 0
     
    —> A TODAS las imgList se le REMOVE la clase isActive
    —> A imgList posición Index se le TOGGLE la clase isActive
    —> A TODAS las descList se le REMOVE la clase isActive
    —> A descList se le ADD la clase isActive   
*/

const buttonPrev = document.querySelector(`.Personajes-prev`)
const buttonNext = document.querySelector(`.Personajes-next`)

const imgList  = document.querySelectorAll(`.Personajes-img`)
const descList = document.querySelectorAll(`.Personajes-desc`)

let itemActive  = 0

//Función para activar el pase de diapositivas
let activateClass = ()=>{
    imgList.forEach((eachImg, index)=>{
        imgList[index].classList.remove(`isActive`)
        imgList[itemActive].classList.add(`isActive`)
    })
    descList.forEach((eachDesc, index)=>{
        descList[index].classList.remove(`isActive`)
        descList[itemActive].classList.add(`isActive`)
    })
}


buttonPrev.addEventListener(`click`, ()=>{
    itemActive--

    if(itemActive <= -1){
        itemActive  = 6}
    activateClass()
})

buttonNext.addEventListener(`click`, ()=>{
    itemActive++

    if(itemActive >= 7){
        itemActive  = 0}
    activateClass()
})