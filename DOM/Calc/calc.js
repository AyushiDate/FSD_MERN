// target all buttons

let buttons = document.querySelectorAll(".calc_btn")

// target all specials

let highlightButtons = document.querySelectorAll("#highlight")

// target display

let display = document.querySelector(".calc_opt")


for(let button of buttons){
    button.addEventListener("click",(event)=>{
        display.innerText  += button.dataset.value
    })
}
/*for(let button of buttons){
    button.onclick=(event)=>{
        console.log(event.button)
    }
}*/



