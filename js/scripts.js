let main = document.querySelector(".main")
let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let mountain3 = document.querySelector(".mountain3")
let mountain4 = document.querySelector(".mountain4")
let mountain7 = document.querySelector(".mountain7")
let river = document.querySelector(".river")
let boat = document.querySelector(".boat")
let bring = document.querySelector(".bring")


window.onscroll= function(){
    let value = scrollY

    stars.style.left = `${value}px`

    moon.style.top = `${value * 3}px`

    mountain3.style.top = `${value  * 1.5}px`

    mountain4.style.top = `${value  * 1.2}px`

    river.style.top = `${value}px`

    boat.style.left = `${value * 3}px`

    bring.style.fontSize = `${value}px`
    if(value >=96){
            bring.style.fontSize = `${96}px`
            bring.style.position = `fixed`
if(value >=402){
    bring.style.display = "none"
}else{
    bring.style.display = "flex"
}
    }

    if(value >= 210){
      main.style.background = "linear-gradient(#376281,#10001f )"
    }else{
              main.style.background = "linear-gradient(#200916,#10001f )"

    }

}


