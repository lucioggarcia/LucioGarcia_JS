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

//const BBDD=[
//    {id:1, nombre: "BOTINES", codigo: "BOT", precio: 5000, cantidad: 1, img: `img/botines.jpg`},
//    {id:2, nombre: "MEDIAS", codigo: "MED", precio: 700, cantidad: 1, img: `img/mediasf.jpg`},
//    {id:3, nombre: "GUANTES", codigo: "GUA", precio: 2000, cantidad: 1, img: `img/guantesa.jpg`},
//    {id:4, nombre: "CAMISETA", codigo: "CAM", precio: 3000, cantidad: 1, img: `img/camisetau.jpg`}
//]

    
//Funciones

function solicitarCantidad(){
    let cantidad = prompt("Ingrese la cantidad del producto seleccionado");
    return cantidad;
}
function solicitarEntrada(){

    let entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");

while(entrada!="ESC"){

    switch (entrada){

        case "BOT":
            let cantidadBOT= solicitarCantidad();
            total+= (buscarProducto("BOT")*cantidadBOT);
            break;
        case "MED":
            let cantidadMED=solicitarCantidad();
            total+=(buscarProducto("MED")*cantidadMED);
            break;
        case "GUA":
            let cantidadGUA=solicitarCantidad();
            total+=(buscarProducto("GUA")*cantidadGUA);
            break;
        case "CAM":
            let cantidadCAM=solicitarCantidad();
            total+=(buscarProducto("CAM")*cantidadCAM);
            break;
        case "ESC":
            break;
    }
    entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");
}
}
function Bienvenida(){

    for (const producto of BBDD){
        
        let contenedor = document.createElement("div")

        contenedor.innerHTML= `<h3> NOMBRE: ${producto.nombre} </h3>
                                <p> COD: ${producto.codigo} </p>
                                <p> PRECIO: $ ${producto.precio}`
        document.body.appendChild(contenedor)           
    }  

    let promocion = document.createElement("p")

    promocion.innerHTML= `<h4> PROMOCION! 20% de descuento en compras mayores a $20000 </h4>`

    document.body.appendChild(promocion)
}
function buscarProducto(codbuscado){
    let buscado= BBDD.find(producto=>producto.codigo===codbuscado);
    let precio=buscado.precio;
    return precio;
}
function aplicaDescuento(valor){
    if(valor>=Number(20000)){
        return true;
    }
    else{
        return false;
    }
}
function Descuento(valor){
    valor=valor*0.8;
    return valor;
}
function FinalizarCompra(){

    let entrada2 = prompt("Desea agregar algo al carrito? (SI/NO)");

if(entrada2==="SI"){
    solicitarEntrada();
}

if(aplicaDescuento(total)){
    console.log("Aplicando Descuento...");
    total=Descuento(total);

}

console.log("El total de su compra es de $ " + total );

}
function AgregarAlCarrito(prodId){
    const existe= carrito.some(prod=>prod.id===prodId)

    if(existe){
        const prod= carrito.map(prod=>{
            if(prod.id===prodId){
                prod.cantidad++
            }
        })
    } else{
    const item=BBDD.find((prod)=>prod.id===prodId)
    carrito.push(item)
   
}
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
let carrito = []

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("carrito")){
        carrito= JSON.parse(localStorage.getItem("carrito"))
        ActualizarCarrito()
    }
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






//let botoninfo = document.getElementById("boton-info")

//botoninfo.onclick =Bienvenida;

//let botoniniciar = document.getElementById("boton-primary")

//botoniniciar.onclick = solicitarEntrada;

//let botontotal= document.getElementById("boton-success")

//botontotal.onclick=FinalizarCompra;


