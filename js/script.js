
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
if (nombre != '' || apellido != '') {
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

if (login()) {
    let precioBalanceadoPerros = 10000;
    let precioBalanceadoGatos = 8000;
    let precioHumedo = 5000;

    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const descuento = x => x * 0.20

    let opcion = prompt('Elegi una opción: \n 1- Alimento balanceado para perro.\n 2- Alimento balanceado para gato. \n 3- Alimento húmedo.\n 4- Promoción alimento para perro + húmedo. \n 5- Promoción alimento para gato + húmedo. \n 6- Total compra. \n 7- Ingresar NO para salir.')
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
                alert('Su total es: '+ total);
                break;    
            default:
                alert('Opción invalida.')
                break;
        }
        opcion = prompt('Elegi una opción: \n 1- Alimento balanceado para perros.\n 2- Alimento balanceado para gatos. \n 3- Alimento húmedo. \n 4- Promoción alimento para perro + húmedo. \n 5- Promoción alimento para gato + húmedo.  \n 6- Total compra. \n 7- Ingresar NO para salir.')

    }
} else {
    alert('Vuelva a intentar ingresar.')
}

alert('Gracias por visitarnos.')