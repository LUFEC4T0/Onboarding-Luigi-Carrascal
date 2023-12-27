//-----------------------low-----------------------//

function agregar(num1, num2) {
    let resultado = num1 * num2;
    return resultado
}

let valor1 = 100;
let valor2 = 20;
let resultadoFuncion = agregar(valor1, valor2);
console.log(resultadoFuncion);

//---------------------medium----------------------//

// function saludar() {
//     let name = prompt("Ingresa tu nombre")
//     return console.log(`Hola mi nombre es ${name}`);
// }
// saludar()

// function operation(num1, num2) {
//     let resultado = num1 * num2;
//     return resultado;
// }

// let numero1 = Number(prompt("ingresa el primer numero"));
// let numero2 = Number(prompt("Ingresa el segundo numero"));
// let resultadoMultiplicacion = operation(numero1, numero2);
// console.log(resultadoMultiplicacion);

// function area(num1, num2) {
//     let resultado = (num1 * num2) / 2;
//     return resultado; 
// }

// let base = Number(prompt("Ingresa el tamano de la base"))
// let altura = Number(prompt("Ingresa la altura"))
// console.log(area(base, altura));

// function perimetro(num1, num2, num3) {
//     let resultado = num1 + num2 + num3;
//     return resultado;
// }

// let lado1 = Number(prompt("Ingrese el valor del primer lado"));
// let lado2 = Number(prompt("Ingrese el valor del segundo lado"));
// let lado3 = Number(prompt("Ingrese el valor del tercer lado"));
// console.log(perimetro(lado1, lado2, lado3));

// function descuento() {
//     let precio = Number(prompt("Ingresa el precio del producto"))
//     let producto = Number(prompt("Ingresa la cantidad del producto"))
//     let precioTotal = precio * producto
//     if (producto >= 10 && producto < 20) {
//         console.log(`El valor de la compra es ${precioTotal} y el descuento aplicado es ${precioTotal * 0.1}`);
//     }else if(producto >= 20){
//         console.log(`El valor de la compra es ${precioTotal} y el descuento aplicado es ${precioTotal * 0.2}`);
//     }else{
//         console.log(`El valor de la compra es ${precioTotal}`);
//     }
// }
// descuento()

// function isAnAdult() {
//     let edad = Number(prompt("Ingresa tu edad"))
//     if (edad >= 18) {
//         alert("Eres mayor de edad")
//     }else{
//         alert("No eres mayor de edad")
//     }
// }
// isAnAdult()

//-------------------------higth-------------------------//

// function impuesto() {
//     let ingresoAnual = Number(prompt("Ingresa tu salario anual"))
//     if (ingresoAnual <= 10000) {
//         alert(`El impuesto a pagar ${ingresoAnual * 0.1}`);
//     }else if(ingresoAnual > 10000 && ingresoAnual <= 20000){
//         alert(`El impuesto a pagar ${ingresoAnual * 0.15}`);
//     }else{
//         alert(`El impuesto a pagar ${ingresoAnual * 0.2}`);
//     }
//     return
// }
// impuesto()

// function dias() {
//     let dia = Number(prompt(`Ingresa el numero del dia de la semana (1,2,3,4,5,6,7)`))
//     if (dia >= 1 && dia <= 5) {
//         alert(`Es un dia habil`)
//     }
//     else {
//         switch (dia) {
//             case 6:
//                 alert(`Es un fin de semana`)
//                 break;

//             case 7:
//                 alert(`Es un fin de semana`)
//                 break;

//             default:
//                 alert(`No es un dia valido`)
//                 break;
//         }

//     }
// }
// dias()

// function datosPersonales(name, lastName, age) {
//     let datos = { name, lastName, age }
//     if (name == "" || name == " ") {
//         console.error("El nombre no puede estar vacío");

//     } else if (lastName == "" || lastName == " ") {
//         console.error("El apellido no puede estar vacío");

//     } else if (isNaN(age) || age == "" || age == " ") {
//         console.error("edad invalida");
//     } else {
//         datos.name = name
//         datos.lastName = lastName
//         datos.age = age
//         console.log(datos);
//     }
// }

// let name = prompt("Ingresa tu nombre")
// let lastName = prompt("Ingresa tu apellido")
// let age = Number(prompt("Ingresa tu edad"))

// datosPersonales(name, lastName, age)

function saludo(name) {
    return `hola mi nombre es ${name}`
}

function ageCalculator(ageBirth, ageActual) {
    return ageActual - ageBirth
}

function presentacion() {
    let nombreIngresado = prompt("ingrese su nombre")
    let añoNacimientoIngresado = Number(prompt("ingrese su año de nacimiento"))
    alert(`${saludo(nombreIngresado)} y tengo ${ageCalculator(añoNacimientoIngresado, 2023)} años`)
}

presentacion()