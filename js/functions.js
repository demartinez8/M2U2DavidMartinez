
function ValidaSoloNumeros() // Función para validar los input para ingresar solo números
{
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
    event.returnValue = false;
}
function ValidaSoloTexto() // Función para validar los input para ingresar solo textos
{
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
    event.returnValue = false;
}
function formatoNumero(value) // Función para dar formato a los resultados de tipo numerico
{
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}


/* DESARROLLO DEL EJERCICIO 1 ************************************************************************************* */

let nombreEstudiante = document.getElementById('nombre_estudiante'); // Valor ingresado en el input
let cantidadMaterias = document.getElementById('cantidad_materias'); // Valor ingresado en el input
let valorMateria = document.getElementById('valor_materia'); // Valor ingresado en el input

const costoFijoPapeleria = 20000; // Costo Fijo de la Papelería
const costoFijoCarnet = 8000; // Costo Fijo del Carnet

const descuento = 20 / 100; // Descuento del 20%

const respuesta = document.querySelector("#respuesta_ejercicio1"); // Div donde se muestra el detalle
const respuestaFinal = document.querySelector("#respuestafinal_ejercicio1"); // Div donde se muestran los totales

let guardaTotal = document.getElementById('guardaTotal'); // Input oculto donde se va guardando la suma del detalle

let botonEjercicio1 = document.getElementById('ejercicio1'); // Boton calcular del ejercicio 1

botonEjercicio1.onclick = function() // Se ejecuta el evento click
{
    if(nombreEstudiante.value == ""){ // Se valida que el nombre del estudiante no esté vacio
        alert("Ingrese el nombre del estudiante para continuar."); nombreEstudiante.focus(); return false;
    }
    if(cantidadMaterias.value == ""){ // Se valida que la cantidad de materias no esté vacia
        alert("Ingrese la cantidad de materias para continuar."); cantidadMaterias.focus(); return false;
    }
    if(valorMateria.value == ""){ // Se valida que el valor de la materia no esté vacio
        alert("Ingrese el valor de la materia para continuar."); valorMateria.focus(); return false;
    }
    
    let totalMaterias = parseInt(cantidadMaterias.value) * parseInt(valorMateria.value); // Suma de la operación del total de las materias
    let calcularValorGuardado = parseInt(totalMaterias) + parseInt(guardaTotal.value); // Suma del total guardado en el input y la iteración de cada registro nuevo
    
    guardaTotal.value = calcularValorGuardado; // Se almacena la ultima suma en el input oculto

    let capturaValorMostrar = "Cantidad ( "+cantidadMaterias.value+" )  *  "+"Valor de la Materia ( $"+formatoNumero(valorMateria.value)+" ) = Total ( $"+formatoNumero(totalMaterias)+" )"; // Se construye el mensaje con formato para reflejarse en el div 1 del ejercicio 1

    const divEjercicio1 = document.createElement("div"); // Se crea el div
    divEjercicio1.setAttribute("class", "col-md-12"); // Se asigna la clase al nuevo div
    divEjercicio1.textContent = capturaValorMostrar; // Se asigna el contenido de la variable capturaValorMostrar en el nuevo div

    respuesta.insertAdjacentElement("beforeend", divEjercicio1); // Se almacena como proceso final el contenido en el div

    let totalDescuentoCalculado = descuento * parseInt(guardaTotal.value); // Se calcula el valor del descuento sobre el total de las materias
    const totalCostoFijo = parseInt(costoFijoPapeleria) + parseInt(costoFijoCarnet); // Se suman los costos fijos

    let totalMateriasFinal = parseInt(guardaTotal.value) - (parseInt(totalDescuentoCalculado) + parseInt(totalCostoFijo)); // Se realiza toda la operación que indica el ejericio 1

    let capturaValorFinalMostrar = "<div class='col-md-12' style='text-align:right;'><hr><table style='float:right;'><tr><td><b>Total de las Materias :</b>&nbsp;&nbsp;&nbsp;</td><td>$"+formatoNumero(guardaTotal.value)+"</td></tr><tr><td><b style='color:#D23333;'>Descuento del 20% :</b>&nbsp;&nbsp;&nbsp;</td><td><b style='color:#D23333; font-weight:normal;'>$"+formatoNumero(totalDescuentoCalculado)+"</b></td></tr><td><b style='color:#E7C237;'>Total de los Costos Fijos :</b>&nbsp;&nbsp;&nbsp;</td><td><b style='color:#E7C237; font-weight:normal;'>$"+formatoNumero(totalCostoFijo)+"</b></td></tr><tr><td><b style='color:#33B537;'>Total a Pagar :</b>&nbsp;&nbsp;&nbsp;</td><td><b style='color:#33B537;'>$"+formatoNumero(totalMateriasFinal)+"</b></td></tr></table><br><br></div>"; // Se construye el resultado final que indica el ejercicio 1

    respuestaFinal.innerHTML = capturaValorFinalMostrar; // Se publica el contenido en el div 2 del ejercicio 1

    nombreEstudiante.setAttribute("disabled", "true"); // Se deshabilita el input del estudiante despues de agregar el primer item de la lista. Dando la indicación que sobre ese estudiante se le está matriculando las materias
    cantidadMaterias.value = ""; // Cada vez que se agregan items a la lista, se deja vacio el input para que puedan agregar otro valor
    valorMateria.value = ""; // Cada vez que se agregan items a la lista, se deja vacio el input para que puedan agregar otro valor
    cantidadMaterias.focus(); // Cada vez que se agregan items a la lista, se aplica el evento focus, es decir, se direcciona al usuario para que en este input pueda inmediatamente agregar la información
}

let borrarEjercicio1 = document.getElementById('reset_ejercicio1'); // Boton borrar del ejercicio 1

borrarEjercicio1.onclick = function() // Se ejecuta el evento click
{
    if(window.confirm("Realmente desea borrar todo el proceso del ejercicio 1 y empezar de nuevo ?")) // Se genera una alerta de confiramación, donde al ejecutar el boton borrar, el sistema le pregunta al usuario si esta seguro de limpiar el formulario o no
    {
        nombreEstudiante.removeAttribute("disabled"); // Si el usuario acepta, se elimina la clase disabled, es decir, el input se habilita de nuevo para ser escribible

        nombreEstudiante.value = ""; // Si el usuario acepta, se vacia el input
        cantidadMaterias.value = ""; // Si el usuario acepta, se vacia el input
        valorMateria.value = ""; // Si el usuario acepta, se vacia el input

        guardaTotal.value = "0"; // Si el usuario acepta, el input donde se guarda el total de las materias, se reestablece el valor a 0

        respuesta.innerHTML = ""; // Si el usuario acepta, se vacia el div 1 del ejercicio 1
        respuestaFinal.innerHTML = ""; // Si el usuario acepta, se vacia el div 2 del ejercicio 1

        nombreEstudiante.focus(); // Si el usuario acepta, se aplica el evento focus, es decir, se direcciona al usuario para que en este input pueda inmediatamente agregar la información
    }else{
        return false;
    }
}


/* DESARROLLO DEL EJERCICIO 2 ************************************************************************************* */

let valorA = document.getElementById('a'); // Valor ingresado en el input
let valorB = document.getElementById('b'); // Valor ingresado en el input
let valorC = document.getElementById('c'); // Valor ingresado en el input
let valorD = document.getElementById('d'); // Valor ingresado en el input

let respuestaEjercicio2 = document.querySelector("#respuesta_ejercicio2"); // Div donde se muestra el mensaje del número mayor y menor

let botonEjercicio2 = document.getElementById('ejercicio2'); // Boton calcular del ejercicio 2

botonEjercicio2.onclick = function() // Se ejecuta el evento click
{
    if(valorA.value == ""){ // Se valida que el input no esté vacio
        alert("Ingrese el valor A para continuar."); valorA.focus(); return false;
    }
    if(valorB.value == ""){ // Se valida que el input no esté vacio
        alert("Ingrese el valor B para continuar."); valorB.focus(); return false;
    }
    if(valorC.value == ""){ // Se valida que el input no esté vacio
        alert("Ingrese el valor C para continuar."); valorC.focus(); return false;
    }
    if(valorD.value == ""){ // Se valida que el input no esté vacio
        alert("Ingrese el valor D para continuar."); valorD.focus(); return false;
    }

    if((valorA.value == valorB.value || valorA.value == valorC.value || valorA.value == valorD.value) || (valorB.value == valorC.value || valorB.value == valorD.value) || (valorC.value == valorD.value)) // Se valida que no hallan números repetidos
    {
        alert("No pueden existir valores ingresados repetidos. Por favor cambiarlo para continuar."); // Si existen números repetidos, el sistema le avisará al usuario para que corrija y continue con el proceso
        respuestaEjercicio2.innerHTML = ""; // Si existen números repetidos, se vaciará el contenido del div del ejercicio 2
        return false; // Se detiene el resto de la operación para validar y continuar
    }
    

    let numeroMayor = Math.max(valorA.value, valorB.value, valorC.value, valorD.value); // Con la función Math.max, se obtiene el valor mayor de acuerdo a la comparación
    let numeroMenor = Math.min(valorA.value, valorB.value, valorC.value, valorD.value); // Con la función Math.min, se obtiene el valor menor de acuerdo a la comparación


    let capturaValorEjercicio2Mostrar = "<div class='col-md-12' style='text-align:center; padding:5%;'><b>Menor Valor :</b>&nbsp;&nbsp;<b>"+numeroMenor+"</b><br><b>Mayor Valor :</b>&nbsp;&nbsp;<b>"+numeroMayor+"</b><br></div>"; // Se construye el mensaje para el div del ejercicio 2

    respuestaEjercicio2.innerHTML = capturaValorEjercicio2Mostrar; // Se publica el mensaje en el div del ejercicio 2
}

let borrarEjercicio2 = document.getElementById('reset_ejercicio2'); // Boton borrar del ejercicio 2

borrarEjercicio2.onclick = function() // Se ejecuta el evento click
{
    if(window.confirm("Realmente desea borrar todo el proceso del ejercicio 2 y empezar de nuevo ?")) // Se genera una alerta de confiramación, donde al ejecutar el boton borrar, el sistema le pregunta al usuario si esta seguro de limpiar el formulario o no
    {
        valorA.value = ""; // Si el usuario acepta, se vacia el input
        valorB.value = ""; // Si el usuario acepta, se vacia el input
        valorC.value = ""; // Si el usuario acepta, se vacia el input
        valorD.value = ""; // Si el usuario acepta, se vacia el input

        respuestaEjercicio2.innerHTML = ""; // Si el usuario acepta, se vacia el div del ejercicio 2
        
        valorA.focus(); // Si el usuario acepta, se aplica el evento focus, es decir, se direcciona al usuario para que en este input pueda inmediatamente agregar la información
    }else{
        return false;
    }
}