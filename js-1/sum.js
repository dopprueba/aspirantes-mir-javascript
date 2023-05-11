function suma(nro) {
    let resultado = 0;

    for (let index = 1; index <= nro; index++) {
        resultado += index;
    }

    return resultado;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));