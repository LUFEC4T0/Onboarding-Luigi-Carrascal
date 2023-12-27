//----------------------low------------------------//

// const numero = Number(prompt("Ingresa un numero del 1 al 100"))
//
// if (numero >= 1 && numero <=100) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// }else{
//     alert("valor invalido")
// }

// const numeroMultiplicar = Number(prompt("Ingresa un numero del 1 al 10"))

// if (numeroMultiplicar >= 1 && numeroMultiplicar <= 10) {
//     console.log("tablas de multiplicar del: " + numeroMultiplicar);
//     for (let i = 1; i <= 10; i++) {
//         const operacion = numeroMultiplicar * i
//         console.table(
//             `${numeroMultiplicar} * ${i} = ${operacion}`
//         )
//     }
// }else{
//     console.log("Valor invalido");
// }

// let suma = 0;
// let numeroIngresado = Number(prompt("Ingresa el numero"));

// while (numeroIngresado !== 0 && !isNaN(numeroIngresado)) {
//     suma += numeroIngresado;
//     numeroIngresado = Number(prompt("Ingresa el numero"));
// }

// console.log(suma);

// let suma2 = 0
// let numeroIngresado2
// do {
//     numeroIngresado2 = Number(prompt("Ingresa el numero"))
// if (!isNaN(numeroIngresado2)) {
//     suma2 += numeroIngresado2
// }
// } while (numeroIngresado2 !== 0 );

// console.log(suma2);

// let person = {
//     name: 'John',
//     lastName: 'Doe',
//     origin: 'USA',
//     studies: 'Computer Science',
//     age: 25
//   };


//   for (let key in person) {
//     console.log(key);
//   }

//   for (let key in person){
//     console.log(person[key]);
//   }

//------------------------medium-------------------------//

// let intentos = 0
// let suma = 0
// let datos = Number(prompt("Ingresa un numero"))
// while (datos != 0 && !isNaN(datos)) {
//     intentos++
//     suma += datos
//     if (datos > 0) {
//         alert("el número ingresado es mayor que el secreto")
//         datos = Number(prompt("Ingresa un numero"))
//     } else if (datos < 0) {
//         alert("el número ingresado es menor que el secreto")
//         datos = Number(prompt("Ingresa un numero"))
//     }
// }
// if (datos === 0) {
//     alert(`¡Has acertado! El número secreto era 0 y has hecho ${intentos} intentos`)
// }

// let numeroIngresado3 = Number(prompt("Ingrese el numero"))
// let divisiores = []
// for (let i = 1; i <= numeroIngresado3; i++) {
//     if (numeroIngresado3 % i === 0) {
//         divisiores.push(i)
//     }
// }

// console.log(`los divisores de ${numeroIngresado3} son: ${divisiores}`);

// function campana() {
//     console.log("Ding Dong");
//     return "Ding Dong"
// }

// let vecesTimbre = Number(prompt("Ingrese el numero de veces a sonar la campana"))
// let vecesASonar = 0

// for (let i = 0; i < vecesTimbre; i++) {
//     vecesASonar = vecesASonar + campana()
//     if (i !== vecesTimbre - 1 ) {
//         vecesASonar = vecesASonar + ", "
//     }
// }

// console.log(vecesASonar);

// const dateLimit = "1997-8-3"
// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let i of dates) {
//     if (i <= dateLimit) {
//         console.log(i);
//     }
// }

//let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marron", "Negro", "Blanco"]

// for (let i of colores) {
//     console.log(i);
// }

// function ejercicio6(colores) {
//     for (let i of colores) {
//         console.log(i);
//     }
// }
// ejercicio6(colores)

// let numeros = [5, 7, 1, 3, 50]

// for (let i of numeros) {
//     let numerosDobles = i * 2
//     console.log(`el número es ${i} y su doble es ${numerosDobles}`);
// }

// let familia = [
//     {nombre: "Luigi", apellido: "Carrascal", edad: 18, parentesco: "hijo",},
//     {nombre: "Andres", apellido: "Navarrete", edad: 31, parentesco: "hijo",},
//     {nombre: "Ana", apellido: "Navarrete", edad: 25, parentesco: "hija",},
//     {nombre: "Yesika", apellido: "Navarrete", edad: 28, parentesco: "hija",},
// ]

// function resultado(valor) {
//     for (let i of valor) {
//         console.log(`hola yo soy ${i.nombre} ${i.apellido} (${i.parentesco}) y tengo ${i.edad} años`);
//     }
// }

// resultado(familia)

//----------------------------hight-----------------------//

// let sumaPares = 0
// let sumaImpares = 0
// let numero

// do {
//     numero = Number(prompt("Ingresa un numero"))
//     if (numero !== 0) {
//         if (numero % 2 === 0) {
//         sumaPares += numero
//         }else{
//             sumaImpares += numero
//         }
//     }
// } while (numero !== 0);

// console.log("Numero par: " + sumaPares);
// console.log("Numeros impares: " + sumaImpares);

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let numeroGrande = numeros[0]

// for (let i = 1; i < numeros.length ; i++) {
//     if (numeros[i] > numeroGrande) {
//         numeroGrande = numeros[i]
//     }
// }
// console.log(numeroGrande);
