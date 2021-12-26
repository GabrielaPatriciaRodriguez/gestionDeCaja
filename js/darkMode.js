let darkMode;

if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode")
}else{
    darkMode = "light"
}

localStorage.setItem("darkMode", darkMode)

$(()=> {
    if(localStorage.getItem("darkMode") == "dark"){ 
    $("body").addClass("darkMode")
    $("#botonDark").hide()
    $("#botonLight").show()
}else {
    $("#botonLight").hide()
}

    $("#botonLight").click(()=>{
        $("#botonDark").show() 
        $("#botonLight").hide()
        
        $("body").removeClass("darkMode")
        localStorage.setItem("darkMode", "light")
    })

    $("#botonDark").click(()=>{
        $("#botonDark").hide() 
        $("#botonLight").show()
        $("body").addClass("darkMode")
        localStorage.setItem("darkMode", "dark")
    })
})