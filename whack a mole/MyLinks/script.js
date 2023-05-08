function toggleMode() {
    const html = document.documentElement
     html.classList.toggle("light")


    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {

        img.setAttribute("src", "./assets/avatarpic.png")
        img.setAttribute("alt", "Foto flávia modo light")

                               

    } else {

        img.setAttribute("src", "./assets/avatarpicdark.png")
        img.setAttribute("alt", "Foto flávia modo dark")
        
        
        
    }

}
