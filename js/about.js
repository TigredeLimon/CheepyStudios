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

Cuando hago CLICK en htmlMain hace una FUNCTION 
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

// Constantes que llaman a los botones del header
const headerButton   = document.querySelector(`.Header-button`)
const headerDropdown = document.querySelector(`.Header-dropdown`)
// Constante que llama al svg del header
const headerArrow    = document.querySelector(`.Header-svg`)
// Constantes que llaman a los elementos responsive del header
const responsiveSvg  = document.querySelector(`.Responsive-svg`)
const responsiveMenu = document.querySelector(`.Responsive-menu`)
// Constante que llama a toda la sección Main de la página
const htmlMain = document.querySelector(`.Main`)
// const htmlBody = document.querySelector(`body`)

// Función que activa/desactiva la clase isActive al menú del header
headerButton.addEventListener(`click`, ()=>{
    headerDropdown.classList.toggle(`isActive`)
    headerArrow.classList.toggle(`isActive`)
})

// Función que activa/desactiva la clase isActive al menú responsive del header
responsiveSvg.addEventListener(`click`, ()=>{
    responsiveMenu.classList.toggle(`isActive`)
})

// Función que quita la clase isActive al menú (tanto responsive como no)
// al hacer click fuera de ellos
htmlMain.addEventListener(`click`, ()=>{
    if(headerDropdown.classList.contains(`isActive`) ||
       headerArrow.classList.contains(`isActive`) ||
       responsiveMenu.classList.contains(`isActive`)){
        
        headerDropdown.classList.remove(`isActive`)
        headerArrow.classList.remove(`isActive`)
        responsiveMenu.classList.remove(`isActive`)
    }
})


// Función comentada porque llamar al Main en vez de el body
// me pareció más eficiente

// htmlBody.addEventListener(`click`, ()=>{
//     if(headerDropdown.classList.contains(`isActive`) && headerArrow.classList.contains(`isActive`))
//     {headerDropdown.classList.remove(`isActive`)
//     headerArrow.classList.remove(`isActive`)}
// })



/* -- PSEUDOCÓDIGO -- 
Cuando hago SCROLL hasta cierto punto, aboutRight y aboutLeft hacen una FUNCTION
    —> A aboutLeft se le ADD la clase Fade-left
    —> A aboutRight se le ADD la clase Fade-right
*/

/*
ToDO: Encontrar una manera mejor de hacer esto, está muy sucio, pero
      no quiero copiar el código de otro sitio sin entenderlo bien

——> Función que añade las clases fadeleft/right al wrapper del About
——> See: Clase, día 44
——> See: https://dev.to/ljcdev/introduction-to-scroll-animations-with-intersection-observer-d05
*/

// Constantes que llaman respectivamente a todas
// las clases .About-right y .About-left
const aboutRight   = document.querySelectorAll(`.About-right`)
const aboutLeft    = document.querySelectorAll(`.About-left`)

// Variable que establece los valores/opciones del observer
let options = {
    root       : null,
    rootMargin : '0px 0px',
    threshold  : 0.1
}

// Variable con intersectionObserver que añade la
// clase .Fade-left a los elementos que posean la clase .About-left
let observerLeft = new IntersectionObserver( (changes)=>{
    changes.forEach((eachWrapper)=>{
        
        const indexLeft = Array.from(aboutLeft).indexOf(eachWrapper.target)

        let {isIntersecting} = eachWrapper
       
        if (isIntersecting){
        aboutLeft[indexLeft].classList.add(`Fade-left`)
        }
    })
})

// Variable con intersectionObserver que añade la
// clase .Fade-right a los elementos que posean la clase .About-right
let observerRight = new IntersectionObserver( (changes)=>{
    changes.forEach((eachWrapper)=>{
        
        const indexRight = Array.from(aboutRight).indexOf(eachWrapper.target)

        let {isIntersecting} = eachWrapper
       
        if (isIntersecting){
        aboutRight[indexRight].classList.add(`Fade-right`)
        }       
    })
})


aboutLeft.forEach(wrapper => {
    observerLeft.observe(wrapper)
  })
aboutRight.forEach(wrapper => {
  observerRight.observe(wrapper)
})

