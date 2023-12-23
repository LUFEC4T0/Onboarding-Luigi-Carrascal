//-------------ez------------//

let myName = "Luigi"
console.log (myName)

let myLastName = "Carrascal"
console.log (myLastName)

let myAge = 18
console.log (myAge)

let myPet = "Odin"
console.log (myPet)

let myPetAge = 2
console.log (myPetAge)

let fullName = `${myName} ${myLastName}`
console.log (fullName)

let presentationText = `${myName} ${myLastName} ${myAge} ${myPet} ${myPetAge} ${fullName}`
console.log (presentationText)

//----------medium---------//

let sumAges = myAge + myPetAge
let restAges = myAge - myPetAge
let productAges = myAge * myPetAge
let divisionAges = myAge / myPetAge

let student = {
    name: "Luigi",
    lastName: "Carrascal",
    age: 18,
    language: "Python",
    country: "Colombia"
}
console.table(student)
console.log(student.name)
console.log(student.lastName)
console.log(student.age)
console.log(student.language)
console.log(student.country)

let pet = {
    name: "Odin",
    lastName: "Carrascal",
    age: 2,
    language: "guau guau",
    country: "Colombia"
}
console.table(pet)
console.log(pet.name)
console.log(pet.lastName)
console.log(pet.age)
console.log(pet.language)
console.log(pet.country)

let fruits = ["Manzana", "Banano", "Melon", "Fresa", "Mandarina"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//--------------hard--------------//

// let iamAdult = prompt("Ingresa tu edad") >= 18
// console.log("Soy un adulto:" + " " + iamAdult);

let number = [1,2,3,4,5]
console.log(number);
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);

let family = [
    {name: "Luigi",
    lastName: "Carrascal",
    age: 18,
    language: "Python",
    country: "Colombia"},

    {name: "Ana",
    lastName: "Navarrete",
    age: 25,
    language: "Python",
    country: "Colombia"},

    {name: "Yeye",
    lastName: "Navarrete",
    age: 28,
    language: "Python",
    country: "Colombia"},

    {name: "Andres",
    lastName: "Mavarrete",
    age: 31,
    language: "Python",
    country: "Colombia"},

    {name: "Martha",
    lastName: "Ligia",
    age: 49,
    language: "Python",
    country: "Colombia"}
]
console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

let randomText = fruits[1]+ " " + number[3]+ " " +family[4].name
console.log(randomText);