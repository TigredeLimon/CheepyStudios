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




/* -- PSEUDOCÓDIGO -- 
Cuando hago CLICK en galleryImg, hace una FUNCTION
    —> A lightbox se le ADD la clase isActive
    —> La SRC de lightboxImg es IGUAL = a la SRC de galleryImg

Cuando hago CLICK en galleryClose, hace una FUNCTION    
    —> A lightbox se le DELETE la clase isActive

Cuando hago CLICK en lightboxPrev, hace una FUNCTION
    —> lightboxActive--
    —> Si... lightboxActive <= -1
       —> lightboxActive = 5
    —> A TODAS las lightboxP se le REMOVE la clase isActive
    —> A lightboxP posición Index se le ADD la clase isActive
*/

// Constante que llama a todos los elementos con clase .Gallery-img
const galleryImg    = document.querySelectorAll(`.Gallery-img`)
// Constantes que llama a los elementos con clase .Lightbox-prev, 
// -next y -close respectivamente
const lightboxPrev  = document.querySelector (`.Lightbox-prev`)
const lightboxNext  = document.querySelector (`.Lightbox-next`)
const galleryClose  = document.querySelector(`.Lightbox-close`)
// Constantes que llaman a los elementos con clase .Lightbox y 
// .Lightbox-img respectivamente
const lightbox     = document.querySelector(`.Lightbox`)
const lightboxImg  = document.querySelector(`.Lightbox-img`)
// Constante que llama a todos los elementos con clase .Lightbox-p
const lightboxP    = document.querySelectorAll(`.Lightbox-p`)

// Variable que establece el valor 0 a lightboxActive
let lightboxActive = 0

// Variable que recoge la función activateGallery para
// optimizar el código. Quita y luego añade la clase isActive
// a los elementos .Lightbox-p, y a su vez cambia la src
// del elemento .Lightbox-img por el de .Gallery-img
let activateGallery = ()=>{
    lightboxP.forEach((eachText, index)=>{
        
        lightboxP[index].classList.remove(`isActive`)
        lightboxP[lightboxActive].classList.add(`isActive`)
    })
    
    lightboxImg.src = galleryImg[lightboxActive].src 
}

// forEach de galleryImg que añade la clase isActive al elemento
// con clase .Lightbox. También quita y añade la clase isActive a lo
// elementos .Lightbox-p.
galleryImg.forEach((eachImg, index)=>{
    galleryImg[index].addEventListener(`click`, ()=>{
        
        lightbox.classList.add(`isActive`)
        lightboxImg.src = galleryImg[index].src
        
        //Seleccionar texto según imagen
        lightboxActive  = index
        lightboxP.forEach((eachtext, i)=>{
            lightboxP[i].classList.remove(`isActive`)
            lightboxP[index].classList.add(`isActive`)
        })
    })   
})

// Función que cambia el valor de lightboxActive al hacer click
// y activa, a su vez, la función ActivateGallery
lightboxPrev.addEventListener(`click`, ()=>{
    lightboxActive--
    if(lightboxActive <= -1){
        lightboxActive = 5}

    activateGallery()
    console.log(lightboxActive)
})

// Función que cambia el valor de lightboxActive al hacer click
// y activa, a su vez, la función ActivateGallery
lightboxNext.addEventListener(`click`, ()=>{
    lightboxActive++
    if(lightboxActive >= 6){
        lightboxActive = 0}

    activateGallery()
    console.log(lightboxActive)
    
})

// Función que elimina la clase isActive al hacer click
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

// Constantes que llaman a los elementos con clase .Personajes-prev
// y .Personajes-next respectivamente
const buttonPrev = document.querySelector(`.Personajes-prev`)
const buttonNext = document.querySelector(`.Personajes-next`)

// Constantes que llaman a todos los elementos con clase
// .Personajes-img y .Personajes-desc respectivamente
const imgList  = document.querySelectorAll(`.Personajes-img`)
const descList = document.querySelectorAll(`.Personajes-desc`)

// Variable que asigna un valor 0 a itemActive
let itemActive  = 0

// Variable que recoge la función activateClass para
// optimizar el código. Quita y luego añade la clase isActive
// a los elementos imgList y descList
let activateClass = ()=>{
    imgList.forEach((eachImg, index)=>{
        imgList[index].classList.remove(`isActive`)
        imgList[itemActive].classList.add(`isActive`)
    })
    descList.forEach((eachDesc, index)=>{
        descList[index].classList.remove(`isActive`)
        descList[itemActive].classList.add(`isActive`)
    })}

// Función que cambia el valor de itemActive al hacer click
// y activa, a su vez, la función activateClass
buttonPrev.addEventListener(`click`, ()=>{
    itemActive--

    if(itemActive <= -1){
        itemActive  = 6}
    activateClass()
})

// Función que cambia el valor de itemActive al hacer click
// y activa, a su vez, la función activateClass
buttonNext.addEventListener(`click`, ()=>{
    itemActive++

    if(itemActive >= 7){
        itemActive  = 0}
    activateClass()
})



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