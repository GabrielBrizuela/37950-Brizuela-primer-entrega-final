//APLICANDO IF-ELSE
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}

let operación = ""
let nuevaOperación = false

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto1 = 4800;
let precioProducto2 = 3500;
let precioProducto3 = 7500;
let precioProducto4 = 800;
let precioProducto5 = 2300;
let precioProducto6 = 6400;
let precioProducto7 = 2100;
let precioProducto8 = 3300;
let precioProducto9 = 1200;
let descuento = 500;

//APLICANDO DO-WHILE Y SWITCH
do {
    ropaDeportiva = prompt(`"Que prenda buscas?",
1: Pantalon deportivo= $4800,
2: Remera entrenamiento= $3500,
3: Campera rompeviento= $7500,
4: Medias anatomicas= $800,
5: Calzas termicas= $2300,
6: Buzo= $6400,
7: Guantes de neopren= $2100,
8: Maya natación= $3300
9: Gorras= $1200`)

    switch (ropaDeportiva) {
        case "1":
            let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio1}`);
            break;

        case "2":
            let nuevoPrecio2 = resta(suma(precioProducto2, iva(precioProducto2)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio2}`);
            break;
        case "3":
            let nuevoPrecio3 = resta(suma(precioProducto3, iva(precioProducto3)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio3}`);
            break;
        case "4":
            let nuevoPrecio4 = resta(suma(precioProducto4, iva(precioProducto4)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio4}`);
            break;
        case "5":
            let nuevoPrecio5 = resta(suma(precioProducto5, iva(precioProducto5)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio5}`);
            break;
        case "6":
            let nuevoPrecio6 = resta(suma(precioProducto6, iva(precioProducto6)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio6}`);
            break;
        case "7":
            let nuevoPrecio7 = resta(suma(precioProducto7, iva(precioProducto7)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio7}`);
            break;
        case "8":
            let nuevoPrecio8 = resta(suma(precioProducto8, iva(precioProducto8)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio8}`);
            break;
        case "9":
            let nuevoPrecio9 = resta(suma(precioProducto9, iva(precioProducto9)), descuento);
            alert(`Debe abonar $ ${nuevoPrecio9}`);
            break;
        default:
            alert("No ha seleccionado nada")
            break;
    }
    nuevaOperación = confirm("Quieres seleccionar otra prenda?")
}
while (nuevaOperación)

//APLICANDO OBJETOS Y ARRAY
const prendas = [
    { id: 1, producto: 'Pantalón deportivo', precio: 4800 },
    { id: 2, producto: 'Remera entrenamiento', precio: 3500 },
    { id: 3, producto: 'Campera rompeviento', precio: 7500 },
    { id: 4, producto: 'Medias anatomicas', precio: 800 },
    { id: 5, producto: 'Calzas termicas', precio: 2300 },
    { id: 6, producto: 'Buzo', precio: 6400 },
    { id: 7, producto: 'Guantes de neopren', precio: 2100 },
];

//APLICANDO CLASS Y AGREGO DE PRODUCTO
class producto {
    constructor(id, producto, precio) {
        this.id = id,
            this.producto = producto,
            this.precio = precio
    }
}

function agregarProducto() {
    const maya = new producto(8, "Maya natación", 3300);
    prendas.push(maya)

    const gorras = new producto(9, "Gorras", 1200);
    prendas.push(gorras)
}

agregarProducto();
console.log(prendas);

//TE COMENTO TODO ESTO PORQUE ME SALE UNDEFINED CUANDO LO LOGEO 
/* function pedirDatos() {
    const nombreIngresado = prompt ("Ingrese la prenda que desea buscar");
    buscarProducto(nombreIngresado);
}

function buscarProducto(prenda){
    const find = prendas.find (elemento=> elemento.producto===prenda);
    console.log (`ENCONTRADO CON FIND`, find);
} */

//FILTRADO
function pedirDatos() {
    const nombreProductoFiltrado = prompt ("Ingrese la prenda que desea filtrar");
    filtrarProducto(nombreProductoFiltrado);
}

function filtrarProducto(prodcutoFilter){
    const filter = prendas.filter (prenda=> prenda.producto.indexOf (prodcutoFilter) !==-1);
    console.log (`Producto filtrado`, filter);
}

pedirDatos();
