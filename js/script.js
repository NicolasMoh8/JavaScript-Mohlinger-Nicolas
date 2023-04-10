//Variable donde voy a guardar los productos que se carguen
let catalogo = [];

//Login
//Usuarios
const usuariosPermitidos = [{
    nombre: 'Nicolás',
    mailPermitido: '3estrellas@hotmail.com'
},
{
    nombre: 'Lionel',
    mailPermitido: 'campeon@gmail.com'
}]

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

//Traigo los elementos del DOM
const inputNombre = document.getElementById('inputNombre'),
    inputPrecio = document.getElementById('inputPrecio'),
    inputCantidad = document.getElementById('inputCantidad'),
    inputCodigo = document.getElementById('inputCodigo'),
    seleccioneKilos = document.getElementById('seleccioneKilos'),
    inputPrecioSinIva = document.getElementById('inputprecioSinIva'),
    inputPrecioConIva = document.getElementById('inputprecioConIva'),
    btnAgregar = document.getElementById('btnAgregar'),
    btnBorrar = document.getElementById('btnBorrar'),
    btnFinalizar = document.getElementById('btnFinalizar'),
    lineaCreada = document.getElementById('lineaCreada'),
    criterioBusqueda = document.getElementById('criterioBusqueda'),
    inputBuscar = document.getElementById('inputBuscar'),
    btnIngresar = document.getElementById('btnIngresar'),
    inputMail = document.getElementById('inputMail'),
    toggles = document.querySelectorAll('.toggles'),
    card = document.querySelector('#card'),
    btnMostrar = document.querySelector('#mostrar');


//Función para cargar los productos que se crean
function cargarProducto(catalogo) {
    const productos = new Productos(inputCodigo.value, inputNombre.value, inputPrecio.value, seleccioneKilos.value, inputCantidad.value, inputPrecioSinIva, inputPrecioConIva);
    catalogo.push(productos);

}

//Función que crea las lineas de productos
function crearLineaProducto(arrayProducto, html) {
    html.innerHTML = '';

    for (const elemento of arrayProducto) {
        let divRowLineaProducto = document.createElement('div');
        divRowLineaProducto.className = 'row';
        divRowLineaProducto.innerHTML =
            `<div class="row">
            <div class="col d-flex justify-content-center"><input type="checkbox" value=""></div>
            <div class="col d-flex justify-content-center">${elemento.codigo}</div>
            <div class="col-3 d-flex justify-content-center">${elemento.nombre}</div>
            <div class="col d-flex justify-content-center">${elemento.precio}</div>
            <div class="col d-flex justify-content-center">${elemento.kilos}</div>
            <div class="col d-flex justify-content-center">${elemento.cantidad}</div>
            <div class="col d-flex justify-content-center">${elemento.precioSinIva}</div>            
            <div class="col d-flex justify-content-center">${elemento.precioConIva}</div>
        </div>`;

        html.append(divRowLineaProducto);
    }
}

//Función para guardar en storage
function guardarStorage(catalogo) {
    localStorage.setItem('catalogoProducto', JSON.stringify(catalogo))
}

//Función para realizar busqueda
function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}

//Función para mostrar lo oculto con d-none
function mostrarDatos(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

//Condición para validar ingreso
const validarMail = () => {
    const usuarioGuardado = usuariosPermitidos.find((usuario) => usuario.mailPermitido === inputMail.value);
    if (usuarioGuardado) {
        return true;
    }
    return false;
}

//Condición para verificar que no queden input vacios
const validar = () => {
    if (inputCodigo.value == '') {
        console.log('error')
        return false;
    }
    if (inputNombre.value == '') {
        console.log('error')
        return false;
    }
    if (inputPrecio.value == 0) {
        console.log('error')
        return false;
    }
    if (inputCantidad.value == 0) {
        console.log('error')
        return false;
    }
    if (inputPrecioSinIva == 0) {
        console.log('error')
        return false;
    }
    if (inputPrecioConIva == 0) {
        console.log('error')
        return false;
    }
    return true;
}


//Evento para que al recargar la pagina se recupere lo guardado en el Storage Local
window.onload = () => {
    catalogo = JSON.parse(localStorage.getItem('catalogoProducto'))
    //operador ternario
    catalogo != null ? crearLineaProducto(catalogo, lineaCreada) : catalogo = []
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

//Botón de ingreso
btnIngresar.onclick = (e) => {
    e.preventDefault();
    if (validarMail()) {
        Swal.fire({
            icon: 'success',
            title: 'Bieeeen!',
            text: 'Mail correcto.',

        })
        mostrarDatos(toggles, 'd-none');


    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Mail incorrecto.',

        })
    }

}

//Evento del botón agregar
btnAgregar.onclick = (evento) => {
    evento.preventDefault();

    if (validar() == true) {
        cargarProducto(catalogo);
        guardarStorage(catalogo);
        crearLineaProducto(catalogo, lineaCreada);

    } else {
        btnAgregar.style.background = 'red';
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El articulo ha sido agregado.',
        showConfirmButton: false,
        timer: 2000
    })

}

//Evento del botón para borrar linea creada de prducto que se encuentra marcada con el checkbox
btnBorrar.onclick = (evento) => {
    evento.preventDefault();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        const codigo = checkbox.parentNode.parentNode.children[1].innerText;
        catalogo = catalogo.filter(producto => producto.codigo !== codigo);
        checkbox.parentNode.parentNode.remove();
    });
    guardarStorage(catalogo);
    crearLineaProducto(catalogo, lineaCreada);
    Swal.fire({
        title: '¿Desea borrar el articulo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Borrado!',
                'El articulo ha sido borrado.',
                'success'
            )
        }
    })
};

//Función que crea tarjetas de htm en el DOM
const tarjetasArticulos = (array) => {
    card.innerHTML = ''
    array.forEach(element => {
        let tarjeta =
            `<div class="card">                  
                <img class="card-img-top" src="${element.imagen}" alt="${element.nombre}">         
                <div class="card-body"> ${element.nombre}
                    <h6>Kilos: ${element.kilos} Kg.</h6>
                    <h5>Código: ${element.codigo}</h5>
                    <h6>Etapa: ${element.etapa}</h6>                    
                    <h6>Tipo: ${element.tipo}</h6>
                    <h5>Precio $${element.precio}</h5> 
                </div>           
            </div>`
        card.innerHTML += tarjeta
    });
}

//Función asincrona
const json = async function () {
    let response = await fetch('./js/data.json');
    let detalleArticulos = await response.json();
    console.log(detalleArticulos);
    tarjetasArticulos(detalleArticulos);

};

//Botón que muestra las tarjetas creadas con la función asincrona
btnMostrar.onclick = json;




