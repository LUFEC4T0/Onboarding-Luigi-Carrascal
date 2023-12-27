
//------------------------Low-----------------------//

let num1 = 4
let num2 = 5

let greater = num1 > num2
if (num2 > num1) {
    console.log(num2);
}

let equals = num1 == num2
if (num1 != num2) {
    console.log("The numbers are different");
}


let date1 = "2018-9-2"
let date2 = "2023-7-5"


if (date1 > date2) {
    console.log(`The date ${date1} is greater than ${date2}`);

} else {
    console.log(`The date ${date2} is greater than ${date1}`);

}

let date3 = "2019-10-19"
let date4 = "2000-11-19"

if (date3 > date4) {
    console.log(`The date ${date3} is greater than ${date4}`);
} else {
    console.log(`The date ${date4} is greater than ${date3}`);
}

let number1 = 5
let number2 = 7
let number3 = 9

console.log(number1 <= number2 && number1 <= number3 && number2 <= number3);
console.log(` The number ${number3} is the largest`);


//-------------------Medium-----------------------------//

// const colors = prompt(" write: red,blue or green")
// const red = "red"
// const blue = "blue"
// const green = "green"

// if (red || blue || green) {
//     switch (colors) {
//         case "red":
//             alert(`RED: The color of passion`);
//             break;

//         case "blue":
//             alert(`BLUE: The color of the sea`);
//             break;

//         case "green":
//             alert(`GREEN: The color of nature`);
//             break
//     }

// }

// const operation = prompt("enter an operation: sum,subtraction,multiplication,division")
// const numberOne = Number(prompt("Enter the first number (1 to 100)"))
// const numberTwo = Number(prompt("Enter the second number (1 to 100)"))

// console.log(`The: ${operation} of ${numberOne} and ${numberTwo}`);

// if ((numberOne >= 1 && numberOne <= 100) && (numberTwo >= 1 && numberTwo <= 100)) {

//     switch (operation) {
//         case "sum":
//             alert(`The ${operation} of ${numberOne} and ${numberTwo} Is: ${numberOne + numberTwo}`);
//             break;
//         case "subtraction":
//             alert(`The ${operation} of ${numberOne} and ${numberTwo} Is: ${numberOne - numberTwo}`);
//             break;
//         case "multiplication":
//             alert(`The ${operation} of ${numberOne} and ${numberTwo} Is: ${numberOne * numberTwo}`);
//             break;
//         case "division":
//             alert(`The ${operation} of ${numberOne} and ${numberTwo} Is: ${numberOne / numberTwo}`);
//             break;
//     }
// }

// const person1 = {
//     name: "Luigi",
//     age: 18,
//     height: 1.75
// }
// const person2 = {
//     name: "Martha",
//     age: 49,
//     height: 1.67
// }

// if (person1.height >= person2.height) {
//     console.log(`Luigi is taller than Martha`);
// }

// if (person1.age >= person2.age) {
//     console.log(`Luigi is older than Martha`);
// } else {
//     console.log(`Luigi is older than Martha`);
// }

// const age = Number(prompt("Enter your age"))
// const height = Number(prompt("Enter your height"))
// const vision = Number(prompt("Enter your vision"))
// const name = prompt("Enter your Full Name")


// if ((age >= 18) && (height >= 1.10) && (vision >= 8 && vision <= 10)) {
//     alert("You are qualified to drive")

// } else {
//     console.log("not qualified");
// }

// const yourAge = Number(prompt("Enter your Age"))
// if (yourAge >= 0 && yourAge <=12) {
//     alert ("infant (0 to 12 years")
// }
// if (yourAge >=13 && yourAge <= 18) {
//     alert ( "adolescent (13 to 18 years old)")
// }
// if (yourAge >=19 && yourAge <= 44) {
//     alert (" older young (19 to 45 years)")
// }
// if (yourAge >=45 && yourAge <= 99) {
//     alert (" elderly (over 45 years)")
// }
// if (yourAge >=100) {
//     alert ("are you really that old? (more than 100 show) ")
// }

// const anyNumber = Number(prompt("Enter only numbers from 1 to 3 "))
// const uno = 1
// const dos = 2
// const tres = 3

// if (uno || dos || tres) {
//     switch (anyNumber) {
//         case 1:
//             alert(`The number entered is ${uno}`)
//             break;
//         case 2:
//             alert(`Twice the number entered is ${dos * 2}`)
//             break;
//         case 3:
//             alert(`Three times the number entered is ${tres * 3}`)
//             break;
//         default:
//             alert("That value is not allowed")
//             break;
//     }

// }


//----------------------High-----------------------------//

// let name = prompt("Enter your name")
// let pass = prompt("Enter your pass, vip or normal?")

// if (name == "luigi" || pass == "vip") {
//     alert("welcome")
//     let entrance = prompt("Do you have entry? yes or no")
//     if (entrance == "yes") {
//         alert("Welcome")
//     }else{
//         alert("Adios")
//     }
// }else{
//     let buyTicket = prompt("Desea comprar una entrada? yes or no")
//     if (buyTicket == "yes") {
//         let money = prompt("Ingrese su dinero")
//         if (money >= 1000) {
//             alert("Venta exitosa, bienvenido")
//         }else{
//             alert("Venta rechaza, valor de la entrada $1000")
//         }
//     }else{
//         alert("Adios")
//     }
// }
