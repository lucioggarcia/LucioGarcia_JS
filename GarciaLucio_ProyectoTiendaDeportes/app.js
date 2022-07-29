//Clases

class Producto{
    constructor(nombre, codigo, id, precio, cantidad,img){

        this.nombre=nombre.toUpperCase();
        this.codigo=codigo.toUpperCase();
        this.id=id;
        this.precio=parseFloat(precio);
        this.cantidad=cantidad;
        this.img=img; 

    }
}

//variables

let total=0;

function AgregarAlCarrito(prodId){
    fetch('data.json')
        .then((res)=> res.json())
        .then((data)=> {
            const item=data.find((prod)=>prod.id===prodId)
            carrito.push(item)
            ActualizarCarrito()
        })
}
function ActualizarCarrito(){
    contenedorcarrito.innerHTML=""
    carrito.forEach((prod)=>{
        const div= document.createElement("div")
        div.className=("productoEnCarrito")
        div.innerHTML=`
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick= "eliminarDelCarrito(${prod.id})" class= "btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorcarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito))
    })
    contadorCarrito.innerText=" " + carrito.length
    precioTotal.innerText= carrito.reduce((ac,prod)=>ac+prod.precio,0)
}
function eliminarDelCarrito(prodId){

    const item= carrito.find((prod)=>prod.id===prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)

    ActualizarCarrito()
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const contenedorproductos= document.getElementById("contenedor_prod")
const contenedorcarrito=document.getElementById("carrito-contenedor")
const contadorCarrito=document.getElementById("contadorCarrito")
const precioTotal= document.getElementById("precioTotal")
const botonVaciar = document.getElementById("vaciar-carrito")
const botonfinalizar = document.getElementById("finalizar-compra")
const botonTodo = document.getElementById("btn-todo")
const botonBot = document.getElementById("btn-bot")
const botonCam = document.getElementById("btn-cam")
const botonMed = document.getElementById("btn-med")
const botonGua = document.getElementById("btn-gua")
const productos = document.querySelectorAll(".producto")
let carrito = []

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito= JSON.parse(localStorage.getItem("carrito"))
        ActualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    ActualizarCarrito()
})

botonfinalizar.addEventListener('click',()=>{
    Swal.fire({
        title: 'Estas seguro/a?',
        text: "Desea confirmar su compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28A709',
        cancelButtonColor: '#F00909',
        confirmButtonText: 'Confirmar compra',
        cancelButtonText: 'No, cancelar!'

    })    
})

botonTodo.addEventListener('click',()=>{
    
    contenedorproductos.innerHTML= ""
    fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            const div= document.createElement("div")
            div.classList.add("producto")
            div.innerHTML = `
            <img src=${producto.img} alt="...">
            <h3>${producto.nombre}</h3>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
          
            `
            contenedorproductos.appendChild(div)
            const boton=document.getElementById(`agregar${producto.id}`)
            boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
        })
    })
})

botonBot.addEventListener('click',()=>{
    contenedorproductos.innerHTML= ""
    
    fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            if(producto.codigo==="BOT"){
                const div= document.createElement("div")
                div.classList.add("producto")
                div.innerHTML = `
                <img src=${producto.img} alt="...">
                <h3>${producto.nombre}</h3>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
                
                `
                contenedorproductos.appendChild(div)
                const boton=document.getElementById(`agregar${producto.id}`)
                boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
            }
            
        })
    })

})

botonCam.addEventListener('click',()=>{
    contenedorproductos.innerHTML= ""
    
    fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            if(producto.codigo==="CAM"){
                const div= document.createElement("div")
                div.classList.add("producto")
                div.innerHTML = `
                <img src=${producto.img} alt="...">
                <h3>${producto.nombre}</h3>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
                
                `
                contenedorproductos.appendChild(div)
                const boton=document.getElementById(`agregar${producto.id}`)
                boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
            }
            
        })
    })

})

botonMed.addEventListener('click',()=>{
    contenedorproductos.innerHTML= ""
    
    fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            if(producto.codigo==="MED"){
                const div= document.createElement("div")
                div.classList.add("producto")
                div.innerHTML = `
                <img src=${producto.img} alt="...">
                <h3>${producto.nombre}</h3>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
                
                `
                contenedorproductos.appendChild(div)
                const boton=document.getElementById(`agregar${producto.id}`)
                boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
            }
            
        })
    })

})

botonGua.addEventListener('click',()=>{
    contenedorproductos.innerHTML= ""
    
    fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            if(producto.codigo==="GUA"){
                const div= document.createElement("div")
                div.classList.add("producto")
                div.innerHTML = `
                <img src=${producto.img} alt="...">
                <h3>${producto.nombre}</h3>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
                
                `
                contenedorproductos.appendChild(div)
                const boton=document.getElementById(`agregar${producto.id}`)
                boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
            }
            
        })
    })

})

fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {

        data.forEach((producto)=>{
            const div= document.createElement("div")
            div.classList.add("producto")
            div.innerHTML = `
            <img src=${producto.img} alt="...">
            <h3>${producto.nombre}</h3>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button id= "agregar${producto.id}" class="btn btn-primary">Agregar <i class="fas fa-shopping-cart"></i></button>
          
            `
            contenedorproductos.appendChild(div)
            const boton=document.getElementById(`agregar${producto.id}`)
            boton.addEventListener("click",()=>{
                AgregarAlCarrito(producto.id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Agregado al carrito!',
                    showConfirmButton: false,
                    timer: 850
                  })
            })
        })
    })









