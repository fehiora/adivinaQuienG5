const bienvenidaUsuario = document.getElementById('bienvenida_usuario')
if (localStorage.getItem('sesion')){
    const bienvenidaStorage = JSON.parse(localStorage.getItem('sesion'))
    bienvenidaUsuario.innerText = bienvenidaStorage.nombre
}else{
    setTimeout(() =>{
        window.location = '../pages/login.html'
    },300)
}


function teclado(tecla) {

    let traerPantalla = document.getElementById('pantalla')
    let valorInpuntPantalla = traerPantalla.value
    traerPantalla.value = valorInpuntPantalla + tecla

    if (tecla == "ESPACIO") {
        traerPantalla.value = valorInpuntPantalla + " "
    }

    if (tecla == "←") {
        traerPantalla.value = valorInpuntPantalla.slice(0, -1)
    }

    if (tecla == "Borrar"){
        traerPantalla.value = ""
    }

}