console.log('......Registro')

//definir los elementos html en variables para el dom

let msj = document.getElementById('msj');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let btn = document.getElementById('btn');

const existe = (arreglo, correo) => {
    let valor = false
    arreglo.forEach(item => {
        if (item.correo == correo) {
            valor = true
            return
        }
    })
    return valor
}


//agregar la logica de escucha al btn

btn.addEventListener('click', () => {
    //cargo el valor del LS en una variable
    let usuarios = []
    //Si existen usuarios en el LS carguelos al arreglo (array) usuarios
    let usuarioRegistrado = localStorage.getItem('usuarios')
    if (usuarioRegistrado != null) {
        usuarios = JSON.parse(usuarioRegistrado)

    }

    //----------------------------------------
    if (existe(usuarios, correo.value)) {
        msj.innerText = ` el usuario ${nombre.value} ya existe`
    } else {

        let objeto = {
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value,
            contraseña: contraseña.value
        }
        usuarios.push(objeto)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))

        msj.innerText = ` el usuario fue registrado exitosamente`

        nombre.value = ''
        apellido.value = ''
        correo.value = ''
        contraseña.value = ''

    }
})