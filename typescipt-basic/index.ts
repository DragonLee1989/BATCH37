// import message from "message.js";

console.log("Hello Typescript");
let age = 36;

console.log("Hello Typescript " + age);
// let isAdmin = true;
// let arrayString: (string)[] = ["cam", "quyt", "buoi"]
// let arrayStringNumber = ["cam", "quyt", 123]
// console.log("Hello Typescript " + arrayStringNumber[0]);
// // cach 1 dung type không kế thừa dc
// type TCar = {
//     type: string,
//     model: string,
//     year: number
// }

// const car: TCar = {
//     type: "Honda",
//     model: "CRV",
//     year: 2023
// }


// // cach 2 dung interface kế thừa dc
// interface ICar {
//     type: string,
//     model: string,
//     year: number
// }

// interface ICar2 extends ICar {
//     color: string
// }

// const car2: ICar2 = {
//     type: "Honda",
//     model: "CRV",
//     year: 2023,
//     color: "tím"
// }

// console.log(car2)

// const sayHello = (name: string) => {
//     console.log('Hello $(name)')
// }
// sayHello("Tuan")

const vehicles = ['mustang', 'f-150', 'expedition'];
const vehicles2 = ['Toyota', 'Honda'];

const vehicles3 = [...vehicles, ...vehicles2];

// const vehicles4 = ['mustang', ...rest];

// const [car, truck, suv] = vehicles;

const [car,, suv] = vehicles;
 console.log(car + " " + suv)
 console.log(vehicles3)


