console.log('... home')

let saludo = document.getElementById('saludo')
let btn = document.getElementById('btn')

let login = localStorage.getItem('login')
if (login != null) {
    let registrado = JSON.parse(login)
    let rta = `Bienvenido ${registrado.nombre} ${registrado.apellido}`
    saludo.innerText = rta
} else {
    window.location.href = '/login.html'
}

btn.addEventListener('click', () => {
    localStorage.removeItem('login')
    window.location.href = '/login.html'
})


