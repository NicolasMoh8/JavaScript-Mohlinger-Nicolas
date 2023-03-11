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
/* if (login()) {
    let precioBalanceadoPerros = 10000;
    let precioBalanceadoGatos = 8000;
    let precioHumedo = 5000;
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const descuento = x => x * 0.20
    let opcion = prompt('Elegí una opción: \n 1- Alimento balanceado para perros (Precio $10.000.-).\n 2- Alimento balanceado para gatos (Precio $8.000.-). \n 3- Alimento húmedo (Precio $5.000.-).\n 4- Promoción alimento para perro + húmedo (20% de descuento). \n 5- Promoción alimento para gato + húmedo (20% de descuento). \n 6- Total de la compra. \n 7- Reiniciar el carrito de compras. \n 8- Ingresar NO para salir.')
    let total = 0;
    while (opcion != 'no' && opcion != 'NO') {        
        switch (opcion) {
            case '1':
                alert('El total de la compra de alimento balanceado para perros es $' + precioBalanceadoPerros + '.');
                total = total + precioBalanceadoPerros;
                break;
            case '2':
                alert('El total de la compra de alimento balanceado para gatos es $' + precioBalanceadoGatos + '.');
                total = total + precioBalanceadoGatos;
                break;
            case '3':
                alert('El total de la compra de Húmedo es $' + precioHumedo + '.');
                total = total + precioHumedo;
                break;
            case '4':
                let nuevoPrecio = resta(suma(precioBalanceadoPerros, precioHumedo), descuento(suma(precioBalanceadoPerros, precioHumedo)));
                alert('El total de la compra de la promo es $' + nuevoPrecio + '.');
                total = total + nuevoPrecio;
                break;
            case '5':
                let nuevoPrecio2 = resta(suma(precioBalanceadoGatos, precioHumedo), descuento(suma(precioBalanceadoGatos, precioHumedo)));
                alert('El total de la compra de la promo es $' + nuevoPrecio2 + '.');
                total = total + nuevoPrecio2;
                break;
            case '6':
                alert('Su total es: $ '+ total);
                break;  
            case '7':
                total = 0;
                alert('Se reinició el carrito de compras.')  
                break;
            default:
                alert('Opción inválida.')
                break;
        }
        opcion = prompt('Elegí una opción: \n 1- Alimento balanceado para perros (Precio $10.000.-).\n 2- Alimento balanceado para gatos (Precio $8.000.-). \n 3- Alimento húmedo (Precio $5.000.-).\n 4- Promoción alimento para perro + húmedo (20% de descuento). \n 5- Promoción alimento para gato + húmedo (20% de descuento). \n 6- Total de la compra. \n 7- Reiniciar el carrito de compras. \n 8- Ingresar NO para salir.')
    }
} else {
    alert('Vuelva a intentar ingresar.')
}
alert('Gracias por visitarnos.') */

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
        new Producto('Agility Adulto', 24200, 20, 2),
        new Producto('Agility Cats Adulto', 9680, 10, 1),
        new Producto('Agility Cats Urinary', 10285, 10, 1),
        new Producto('Agility Húmedo', 3630, 0.34, 6),
        new Producto('Agility Húmedo', 4356, 0.090, 8),
        new Producto('Maxxium Adulto', 14520, 20, 1),
        new Producto('Maxxium Cachorro', 45375, 15, 3),
        new Producto('Sieger Criadores', 18500, 22, 1)
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
    let orden = prompt('Seleccione como desea ordenarlos: \n1 - Por nombre (A-Z). \n2 - Por nombre (Z-A). \n3 - Mayor a menor precio. \n4 - Menor a mayor precio.');
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
        alert('Los nombres de los productos que coinciden parcial o totalmente con su búsqueda, son:\n- ' + mostrar.join('\n- '));
    }

} else {
    alert('Vuelva a intentar ingresar.')
}
alert('Gracias por visitarnos.')





