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
const galleryImg = document.querySelectorAll(`.Hero-img`)

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


/* -- PSEUDOCÓDIGO -- 
Cuando hago CLICK en mapButton hace una FUNCTION

    —>A TODAS las mapButton se les REMOVE la clase isActive
    —>A la mapButton posicion index se le ADD la clase
      isActive

    —>A TODAS las mapContent se les REMOVE la clase isActive
    —>A la mapContent posicion index se le ADD la clase
      isActive
*/

const mapButton  = document.querySelectorAll(`.Map-button`)
const mapContent = document.querySelectorAll(`.Map-content`)

mapButton.forEach((eachTab, index)=>{
    mapButton[index].addEventListener(`click`, ()=>{
        
        mapButton.forEach((eachTab, index)=>{
            mapButton[index].classList.remove(`isActive`)
            mapContent[index].classList.remove(`isActive`)
        })

    mapButton[index].classList.add(`isActive`)
    mapContent[index].classList.add(`isActive`)
    })
})
