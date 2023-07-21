'use strict'
/*----------------------------------------
¡Hola! Aquí encontrarás la 
estructura de este archivo .js :-)

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

// Constante que llama a todas las imágenes del Hero
const galleryImg = document.querySelectorAll(`.Hero-img`)

// Variable que establece un valor a galleryActive
let galleryActive = 0

// Intervalo que cambia la clase isActive de cada foto
// cada 8 segundos
setInterval(()=>{
    galleryActive++
    if(galleryActive >= 4){
        galleryActive = 0}

    galleryImg.forEach((eachImg, index)=>{
        galleryImg[index].classList.remove(`isActive`)
        galleryImg[galleryActive].classList.add(`isActive`)
    })
}, 8000)





/* -- PSEUDOCÓDIGO -- 
Cuando hago SCROLL hasta cierto punto, animation hace una FUNCTION
    —> A TODAS las animation se le añade la clase Fade-in
*/
/*
——> Función que añade los elementos que tienen la clase Animation
——> See: Clase, día 44
——> See: https://dev.to/ljcdev/introduction-to-scroll-animations-with-intersection-observer-d05
*/

// Constante que llama a todas las clases .Animation
const animation = document.querySelectorAll(`.Animation`)

// Variable que establece los valores/opciones del observer
let options = {
    root       : null,
    rootMargin : '0px 0px',
    threshold  : [0, 1]
}

// Variable con intersectionObserver que añade la
// clase .Fade-in a los elementos que posean la clase .Animation
let observer = new IntersectionObserver( (changes)=>{
    changes.forEach((eachAnimation)=>{
        
        const indexAnimation = Array.from(animation).indexOf(eachAnimation.target)

        let {isIntersecting} = eachAnimation
       
        if (isIntersecting){
        animation[indexAnimation].classList.add(`Fade-in`)
        }
    })
}, options)
animation.forEach(wrapper => {
    observer.observe(wrapper)
  })