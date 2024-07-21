let msj = document.getElementById('msj');
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let btn = document.getElementById('btn');

// agregamos la logica de escucha al btn con el evento click

const existe = (arreglo, correo) => {
    let valor = null
    arreglo.forEach(item => {
        if (item.correo == correo) {
            valor = item
            return
        }
    })
    return valor
}

btn.addEventListener('click', () => {
    //cargo el valor del LS en una variable
    let usuarios = []
    //Si existen usuarios en el LS carguelos al arreglo (array) usuarios
    let usuarioRegistrado = localStorage.getItem('usuarios')
    if (usuarioRegistrado != null) {
        usuarios = JSON.parse(usuarioRegistrado)

    }

    let logeado = existe(usuarios, usuario.value)
    if (logeado != null) {
        if (logeado.contraseña == contraseña.value) {
            msj.innerHTML = ''
            localStorage.setItem('login', JSON.stringify(logeado))
            window.location.href = "./home.html"
        } else {
            msj.innerHTML = 'Contraseña incorrecta'
            msj.setAttribute('class', "error")

        }
    } else {
        msj.innerHTML = `Usuario  ${usuario.value} no registrado`
        msj.setAttribute('class', "error")
    }
})