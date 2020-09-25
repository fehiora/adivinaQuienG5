const trayendoFormulario = document.getElementById('formularioRegistro')
console.log(trayendoFormulario)

const arrayUsuario =[]

//Función para validar campos del formulario

trayendoFormulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombreUsuario = document.getElementById('nombreHtml').value
    const emailUsuario = document.getElementById('emailHtml').value
    const claveUsuario = document.getElementById('claveHtml').value

    if (nombreUsuario == '') {
        nombreVerifica.innerText = '*Debe diligenciar el nombre'
    }

    if (emailUsuario == '') {
        emailVerifica.innerText = '*Debe diligenciar el email'
    }

    if (claveUsuario == '') {
        claveVerifica.innerText = '*Debe asignar una clave'
    }

    if (nombreUsuario != '' && emailUsuario != '' && claveUsuario != '') {
        swal("Bien hecho!","Registro Exitoso","success")
        const usuarioObjeto = {
            nombre: nombreUsuario,
            email: emailUsuario,
            clave: claveUsuario
        }
        console.log(usuarioObjeto)
        guardarUsuarioEnStorage(usuarioObjeto)
        setTimeout(() =>{
            window.location = './assets/pages/login.html'
        },2000)
    } else {
        swal("Error", "Hay campos sin diligenciar", "error")
    }

})


//Función para guardar en Local Storage

const guardarUsuarioEnStorage = (usuarioObjeto) => {
    
    if(localStorage.getItem('usuarios') == null){
        arrayUsuario.push(usuarioObjeto)
        const arrayUsuariosEnString = JSON.stringify(arrayUsuario)
        localStorage.setItem('usuarios', arrayUsuariosEnString)
    }else{
        const arrayUsuariosEnStorage = JSON.parse(localStorage.getItem('usuarios'))
        arrayUsuariosEnStorage.push(usuarioObjeto)
        const arrayUsuariosEnString = JSON.stringify(arrayUsuariosEnStorage)
        localStorage.setItem('usuarios', arrayUsuariosEnString)
    }
}