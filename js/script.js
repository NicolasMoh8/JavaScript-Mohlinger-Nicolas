let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
if (nombre != '' && apellido != '') {
    alert('Bienvenido/a ' + nombre + ' ' + apellido)
} else {
    alert('Faltan datos')
}
let savedContraseña = '3estrellas';
function login() {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let contraseña = prompt('ingrese su contraseña. Tenes ' + (i + 1) + ' oportunidades.');
        if (contraseña === savedContraseña) {
            alert('Bienvenido a su local de venta de alimento balanceado para mascotas.');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' oportunidades.')
        }
    }
    return ingresar;
}      

class Producto {
    constructor(nombre, precio, kilos, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.kilos = parseFloat(kilos);
        this.cantidad = parseInt(cantidad);
        this.vendido = false;
    }
    sumarIVAyTotal() {
        this.precio = (this.precio * 1.21) * this.cantidad;
    }
    cambiarPrecio(precio) {
        this.precio = precio;
    }
    vender() {
        this.vendido = true;
    }
}

if (login()) {

    const productos = [
        new Producto('Agility Adulto por 20 kg.', 24200, 20, 2),
        new Producto('Agility Cats Adulto por 10 kg.', 9680, 10, 1),
        new Producto('Agility Cats Urinary por 10 kg.', 10285, 10, 1),
        new Producto('Agility Húmedo por 340 gr.', 3630, 0.34, 6),
        new Producto('Agility Húmedo por 90 gr.', 4356, 0.090, 8),
        new Producto('Maxxium Adulto por 20 kg.', 14520, 20, 1),
        new Producto('Maxxium Cachorro por 15 kg.', 45375, 15, 3),
        new Producto('Sieger Criadores por 22 kg.', 18500, 22, 1)
    ]
    console.log(productos);

    let continuar = true;

    while (continuar) {

        let ingreso = prompt('Ingresa los datos del producto que desea comprar: nombre del producto, precio sin IVA, kilos, cantidad, separados por una barra diagonal ("/"). Ingrese NO para salir.');

        if (ingreso.toUpperCase() == 'NO') {
            continuar = false;
            break;
        }
        let productoNuevo = ingreso.split('/');
        const productoA = new Producto(productoNuevo[0], productoNuevo[1], productoNuevo[2], productoNuevo[3]);
        console.log(productoA);
        productos.push(productoA);
        productoA.sumarIVAyTotal(productos);
        console.log(productos);

    }
    let orden = prompt('Seleccione como desea ordenarlos: \n1 - Por nombre (A-Z). \n2 - Por nombre (Z-A). \n3 - Mayor a menor precio. \n4 - Menor a mayor precio. \n5 - Mayor a menor kilos. \n6 - Menor a mayor kilos.');
    function ordenar(orden, array) {
        let arrayOrdenado = array.slice(0);
        switch (orden) {
            case '1':
                let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre))
                return nombreAscendente;
            case '2':
                let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre))
                return nombreDescendente;
            case '3':
                return arrayOrdenado.sort((a, b) => b.precio - a.precio)
            case '4':
                return arrayOrdenado.sort((a, b) => a.precio - b.precio)
            case '5':
                return arrayOrdenado.sort((a, b) => b.kilos - a.kilos)
            case '6':
                return arrayOrdenado.sort((a, b) => a.kilos - b.kilos)
            default:
                alert('No es correcto');
                break;
        }
    }
    function crearResultado(array) {
        let info = '';
        array.forEach(elemento => {
            info += 'El precio del producto ' + elemento.nombre + ' es $ ' + elemento.precio + ', cada unidad pesa ' + elemento.kilos + ' kilos y es/son ' + elemento.cantidad + ' unidad/es.\n\n'

        })
        return info;
    }
    alert(crearResultado(ordenar(orden, productos)))

    let nombreBuscado = prompt('Escribí el nombre del producto que busca.');
    const filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()))

    if (filtrado.length == 0) {
        alert('No se han encontrado coincidencias.');
    } else {
        const mostrar = filtrado.map((producto) => producto.nombre);
        alert('Los nombres de los productos que coinciden parcial o totalmente con su búsqueda, son:\n\n- ' + mostrar.join('\n- '));
    }

} else {
    alert('Vuelva a intentar ingresar.')
}
alert('Gracias por visitarnos.')





