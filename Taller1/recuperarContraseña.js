let msj = document.getElementById('msj');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let contraseña2 = document.getElementById('contraseña2');
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

const asignar = (arreglo, correo, contraseña) => {
    arreglo.forEach(item => {
        if (item.correo == correo) {
            item.contraseña = contraseña
            return
        }
    });
    localStorage.setItem('usuarios', JSON.stringify(arreglo))
    return 
}

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
        if (contraseña.value == contraseña2.value){
            asignar(usuarios, correo.value, contraseña.value)
            msj.innerText = `contraseña cambiada con exito`
            msj.setAttribute('class', "ok")
    }
    else {
            msj.innerText = `las contraseñas no coinciden`
            msj.setAttribute('class', "error") 
    }  

    }else {
        msj.innerText = `el usuario ${correo.value} no esta registrado` 
        msj.setAttribute('class', "error")

    }
    
})
