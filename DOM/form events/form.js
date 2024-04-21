let show = false

document.querySelector("#shbtn").addEventListener("click", () => {

    show = !show

     let type = document.querySelector("#password").getAttribute("type")

    if (show) {
        document.querySelector("#password").setAttribute("type", "text")
    }else{
        document.querySelector("#password").setAttribute("type", "password")
    }
    
})

