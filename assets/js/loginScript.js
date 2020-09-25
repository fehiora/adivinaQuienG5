// alert('script')

const traerFormulario = document.getElementById('formularioLoggin')
console.log(traerFormulario)

traerFormulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.getElementById('emailLoggin').value
    const clave = document.getElementById('claveLoggin').value

    if (localStorage.getItem('usuarios')){
        const arrayValidarUsuario = JSON.parse(localStorage.getItem('usuarios'))
        

        for(let i=0; i < arrayValidarUsuario.length; i++){

            // console.log(arrayValidarUsuario[i])
            console.log(arrayValidarUsuario[i].email)
            console.log(arrayValidarUsuario[i].clave)

            // usar el indice del arreglo con la variable de iteración
            if(email == arrayValidarUsuario[i].email && clave == arrayValidarUsuario[i].clave){
                swal("Bienvenido","Ingreso Exitoso","success")
                // añadir aqui una función que redirija a pagina de usuario
                localStorage.setItem('sesion', JSON.stringify(arrayValidarUsuario[i]))
                setTimeout(() =>{
                    window.location = '../pages/task.html'
                },1000)
                return true
            }
        }

        swal("Error", "Los datos no coinciden", "error")

    }else{
        swal("No hay datos almacenados", "No hay datos almacenados", "error")
    }
    
})