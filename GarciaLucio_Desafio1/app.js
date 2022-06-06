//variables

let total=0;
const botines=5000;
const medias=700;
const guantes=2000;
const camiseta=3000;

//Funciones

function solicitarCantidad(){
    let cantidad = prompt("Ingrese la cantidad del producto seleccionado");
    return cantidad;
}





alert("Bienvenido/a!");
alert("LISTA DE PRECIOS");
alert("Botines (BOT) --- $5000");
alert("Medias (MED) --- $700");
alert("Guantes (GUA) --- $2000");
alert("Camiseta (CAM) ---$3000");


let entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");

while(entrada!="ESC"){

    switch (entrada){

        case "BOT":
            let cantidadBOT= solicitarCantidad();
            total+= (botines*cantidadBOT);
            break;
        case "MED":
            let cantidadMED=solicitarCantidad();
            total+=(medias*cantidadMED);
            break;
        case "GUA":
            let cantidadGUA=solicitarCantidad();
            total+=(guantes*cantidadGUA);
            break;
        case "CAM":
            let cantidadCAM=solicitarCantidad();
            total+=(camiseta*cantidadCAM);
            break;
        case "ESC":
            break;
    }
    entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");
}



let entrada2 = prompt("Desea agregar algo al carrito? (SI/NO)")

if(entrada2==="SI"){
    let entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");

while(entrada!="ESC"){

    switch (entrada){

        case "BOT":
            let cantidadBOT= solicitarCantidad();
            total+= (botines*cantidadBOT);
            break;
        case "MED":
            let cantidadMED=solicitarCantidad();
            total+=(medias*cantidadMED);
            break;
        case "GUA":
            let cantidadGUA=solicitarCantidad();
            total+=(guantes*cantidadGUA);
            break;
        case "CAM":
            let cantidadCAM=solicitarCantidad();
            total+=(camiseta*cantidadCAM);
            break;
        case "ESC":
            break;
    }
    entrada= prompt("Ingrese su compra al carrito (para salir escriba ESC)");
}


}
console.log("El total de su compra es de $ " + total )