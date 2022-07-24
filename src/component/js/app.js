window.addEventListener("scroll" ,animacion)
function animacion(e){
    let  animacion = document.querySelector(".animacion")
    let posicion =  animacion.getBoundingClientRect().top
    let tamañoPantalla = this.innerHeight/1


        if(posicion <  tamañoPantalla ){

            animacion.style.animation = "caja1 1s ease-out"
           
            // document.getElementById("animacions").style.position = "absolute"
        }
        // document.getElementById("animacions").style.position = "none"
     }



     


