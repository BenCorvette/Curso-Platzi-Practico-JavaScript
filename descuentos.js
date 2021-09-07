const originalPrice = 120;
const discountPrice = 18;

function calcularPrecioDescuento (price, discount) {
    const porcentajePrecioDescuento = 100 - discount;
    const precioDescuento = (price * porcentajePrecioDescuento) / 100;
    return precioDescuento
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;

    const PrecioConDescuento = calcularPrecioDescuento(priceValue, DiscountValue);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio final es: $" + PrecioConDescuento;
}

//console.log({
//    originalPrice,
//    discountPrice,
//    porcentajePrecioDescuento,
//    precioDescuento
//});


