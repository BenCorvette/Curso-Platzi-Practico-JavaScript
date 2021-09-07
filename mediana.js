
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
       }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}

const List1 = [
    100,
    200,
    500,
    400000,
];

const halfList1 = parseInt(List1.length / 2);

function Par(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (Par(List1.length)) {
    const elemento1 = List1[halfList1 - 1];
    const elemento2 = List1[halfList1];

    const Promedioelemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana = Promedioelemento1y2
} else {
    mediana = List1[halfList1]

}