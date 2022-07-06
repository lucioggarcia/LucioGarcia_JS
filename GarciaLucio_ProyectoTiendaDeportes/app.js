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

const BBDD=[new Producto("botines","bot",1,5000,1,`img/botines.jpg`), 
            new Producto("medias","med",2,700,1,`img/mediasf.jpg`), 
            new Producto("guantes","gua",3,2000,1,`img/guantesa.jpg`), 
            new Producto("camiseta","cam",4,3000,1,`img/camisetau.jpg`)]
  
//Funciones

function AgregarAlCarrito(prodId){
    const item=BBDD.find((prod)=>prod.id===prodId)
    carrito.push(item)
    ActualizarCarrito()
   
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
const botonVaciar = document.getElementById('vaciar-carrito')
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

BBDD.forEach((producto) =>{
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
    })
})









