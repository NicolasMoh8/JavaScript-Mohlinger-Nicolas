/* let nombre = prompt('Ingrese su nombre');
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
}    */




/* class Producto {
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

        let ingreso = prompt('Ingrese los datos del producto que desea comprar: nombre del producto, precio sin IVA, kilos, cantidad, separados por una barra diagonal ("/"). Ingrese NO para salir.');

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
 */

//Variable donde voy a guardar los productos que se carguen
let catalogo = [];
//Traigo los elementos del DOM
const inputNombre = document.getElementById('inputNombre'),
    inputPrecio = document.getElementById('inputPrecio'),
    inputCantidad = document.getElementById('inputCantidad'),
    inputCodigo = document.getElementById('inputCodigo'),
    seleccioneKilos = document.getElementById('seleccioneKilos'),
    inputPrecioSinIva = document.getElementById('inputprecioSinIva'),
    inputPrecioConIva = document.getElementById('inputprecioConIva'),
    btnAgregar = document.getElementById('btnAgregar'),
    btnFinalizar = document.getElementById('btnFinalizar'),
    lineaCreada = document.getElementById('lineaCreada'),
    criterioBusqueda = document.getElementById('criterioBusqueda'),
    inputBuscar = document.getElementById('inputBuscar')
//Se crea una clase constructora de los productos
class Productos {
    //Metodo constructor
    constructor(codigo, nombre, precio, kilos, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.kilos = parseFloat(kilos);
        this.cantidad = parseInt(cantidad);
        this.codigo = codigo;
        this.precioSinIva = this.precio * this.cantidad;
        this.precioConIva = this.precioSinIva * 1.21;
    }
}
//Funcion para cargar los productos que se crean
function cargarProducto(catalogo) {
    const productos = new Productos(inputCodigo.value, inputNombre.value, inputPrecio.value, seleccioneKilos.value, inputCantidad.value, inputPrecioSinIva, inputPrecioConIva);
    catalogo.push(productos);

    if (inputCodigo.value=='') {
        console.log('error')
    }
    if (inputNombre.value=='') {
        console.log('error')
    }
    if (inputPrecio.value==0) {
        console.log('error')
    }
    if (inputCantidad.value==0) {
        console.log('error')
    }
    if (inputPrecioSinIva==0) {
        console.log('error')
    }
    if (inputPrecioConIva==0) {
        console.log('error')
    }
}
//Funcion para guardar en storage
function guardarStorage(catalogo) {
    localStorage.setItem('catalogoProducto', JSON.stringify(catalogo))
}
//funcion que crea las lineas de productos
function crearLineaProducto(arrayProducto, html) {
    html.innerHTML = '';

    for (const elemento of arrayProducto) {
        let divRowLineaProducto = document.createElement('div');
        divRowLineaProducto.className = 'row';
        divRowLineaProducto.innerHTML = `
        <div class="row">
            <div class="col d-flex justify-content-center">${elemento.codigo}</div>
            <div class="col-3 d-flex justify-content-center">${elemento.nombre}</div>
            <div class="col d-flex justify-content-center">${elemento.precio}</div>
            <div class="col d-flex justify-content-center">"${elemento.kilos}"</div>
            <div class="col d-flex justify-content-center">${elemento.cantidad}</div>
            <div class="col d-flex justify-content-center">${elemento.precioSinIva}</div>            
            <div class="col d-flex justify-content-center">${elemento.precioConIva}</div>
        </div>`;

        html.append(divRowLineaProducto);
    }    
}
//Evento del boton agragar
btnAgregar.onclick = (evento) => {
    evento.preventDefault();
    cargarProducto(catalogo);
    guardarStorage(catalogo);
    crearLineaProducto(catalogo, lineaCreada);
}
//Evento para que al recargar la pagina se recupere lo guardado en el Storage Local
window.onload = () => {
    catalogo = JSON.parse(localStorage.getItem('catalogoProducto'))
    //operador ternario
    catalogo != null ? crearLineaProducto(catalogo, lineaCreada) : catalogo = []
}
//Funcion para realizar busqueda
function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}
//Evento para mostrar la busqueda
inputBuscar.addEventListener('input', () => {
    criterio = criterioBusqueda.value;
    if (criterio == 'Criterio de busqueda') {
        criterioBusqueda.style.border = 'red solid 2px';
        inputBuscar.value = ''
    } else {
        criterioBusqueda.style.border = '';
        let cadena = (inputBuscar.value).toUpperCase();
        crearLineaProducto(buscar(catalogo, criterio, cadena), lineaCreada);
    }
})




