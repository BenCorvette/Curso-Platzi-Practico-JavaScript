// Encapsulando código en funciones

//Cuadrado

console.group(`Cuadrados`);
function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

//Triangulo

console.group(`Triangulos`);
function perimetroTriangulo(lado1, lado2, baseTriangulo) {
    return lado1 + lado2 + baseTriangulo;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Circulo 
console.group(`Circulo`);

var pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    var diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}
console.groupEnd();

//A partir de aca se interactua con HTML

function calcularPerimetroCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    alert(area);
}