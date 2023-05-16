let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function () {
        return "Hola, me llamo " + this.nombre;
    }
}

console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;

for (const key in pedro) {
    if (pedro.hasOwnProperty.call(pedro, key)) {
        const element = pedro[key];
        console.log(key + " : " + element);

    }
}

console.log(pedro.saluda());