const bienvenidaUsuario = document.getElementById('bienvenida_usuario')
if (localStorage.getItem('sesion')){
    const bienvenidaStorage = JSON.parse(localStorage.getItem('sesion'))
    bienvenidaUsuario.innerText = bienvenidaStorage.nombre
}else{
    setTimeout(() =>{
        window.location = '../pages/login.html'
    },300)
}
