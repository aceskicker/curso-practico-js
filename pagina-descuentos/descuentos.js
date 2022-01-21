function CalculoPCD(precio, descuento){
    const precioCD = 100 - descuento;
    const precioFinal = (precio * precioCD) / 100;

    if(precioFinal){
    return ("El precio con descuento es: $" + precioFinal);
}else{
    return ("Por favor: Ingrese un valor antes de calcular el descuento")
}
}

function calcularDescuentoCupon(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const precioConDescuentoCupon = precioConDescuento - cupon;

    if(precioConDescuentoCupon){
        return (`El precio TOTAL con CUPON es: $ ${precioConDescuentoCupon}.`);
    }else {
        return (`Error: Inserte un cupon válido.`);
    } 
}


function calcularDescuento(){
    const inputPrecio = document.getElementById("precioProducto");
    const valuePrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("descuentoProducto")
    const valueDescuento = inputDescuento.value;

    const calculoF = CalculoPCD(valuePrecio, valueDescuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText =  calculoF;
    }

    const cupons = ["Rancio", "DogeCoin", "K-BUM_K-BUM"];

function onclickButtonPriceCupon() {
    const inputPrecio = document.getElementById("precioProducto");
    const valuePrecio = inputPrecio.value;


    const inputDescuento = document.getElementById("descuentoProducto");
    const valueDescuento = inputDescuento.value;

    const inputCoupon = document.getElementById("InputCupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case "Rancio":
            descuento = 10;
        break;
        case "DogeCoin":
            descuento = 15;
        break;
        case "K-BUM_K-BUM":
            descuento = 30;
        break;
    }


    const precioConDescuentoCupon = calcularDescuentoCupon(valuePrecio, valueDescuento, descuento);

    const ResultPC = document.getElementById("resultPC");
    ResultPC.innerText = precioConDescuentoCupon;
}
    
