console.log ('....TAREAS')

let texto = document.getElementById('texto');
let salida = document.getElementById ('salida');
let btn = document.getElementById ('btn');

let tareas = [];

const listar = () => {
    tareas.forEach(element => {
        var linea = document.createElement ('li')
        linea.innerHTML = 
        `${element.tarea}
        <button onclick = "borrar(${element.id})">borrar</button>`
        salida.appendChild (linea)
    });
}





btn.addEventListener ('click', () =>{
    salida.textContent = ''
    
    let id = tareas.length + 1
    let objeto = {
        id: id,
        tarea: texto.value
    }
    tareas.push (objeto)
    texto.value = ""
    console.log('agregar tarea...' + JSON.stringify(tareas))
    listar()
})


const borrar = (id) => {
    console.log ('elemento' + id)
    let nueva = tareas.filter (tarea => tarea.id != id)
    salida.textContent = ''
    tareas = nueva
    listar ()
}


