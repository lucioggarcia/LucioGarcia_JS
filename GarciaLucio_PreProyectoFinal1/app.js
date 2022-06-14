//Clases

class Producto{
    constructor(nombre, codigo, id, precio){

        this.nombre=nombre.toUpperCase();
        this.codigo=codigo.toUpperCase();
        this.id=id;
        this.precio=parseFloat(precio);
    }
}

//variables

let total=0;

const BBDD=[new Producto("botines","bot",1,5000), new Producto("medias","med",2,700), new Producto("guantes","gua",3,2000), new Producto("camiseta","cam",4,3000),]


    
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

    alert("Bienvenido/a!");
    alert("LISTA DE PRECIOS");
    alert("Botines (BOT) --- $5000");
    alert("Medias (MED) --- $700");
    alert("Guantes (GUA) --- $2000");
    alert("Camiseta (CAM) ---$3000");
    alert("PROMOCION! 20% de descuento en compras mayores a $20000")

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


Bienvenida();

solicitarEntrada();


let entrada2 = prompt("Desea agregar algo al carrito? (SI/NO)");

if(entrada2==="SI"){
    solicitarEntrada();
}

if(aplicaDescuento(total)){
    console.log("Aplicando Descuento...");
    total=Descuento(total);

}

console.log("El total de su compra es de $ " + total );