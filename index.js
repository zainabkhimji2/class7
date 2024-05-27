"use strict";
// ******************************************************************************
//                           ("SIMPLE FUNCTION BUILDING")
// function greet() {
//     return "hello world"
// }
//   let message = greet()
//   console.log(message);
// ******************************************************************************
//  function sum() {
//     return 2+2
//  }
//  let add = sum()
//  console.log(`${add} it is my result`);
// ******************************************************************************
// function add(number1:number,number2:number) {
//     return number1 + number2
// }
// let result1 = add(2,5)
// let result2 = add(54,55)
// let result3 = add(47,74)
// console.log(result1);
// console.log(result2);
// console.log(result3);
// ******************************************************************************
//                            (THIS IS FOR MY PRACTICE)
// function add(number1:number,number2:number) {
//     console.log(number1+number2);
// }
// add(67,88)
// add(6,9)
// ******************************************************************************
//                            (THIS IS A CLASS TASK)
// function sub(snum1:number,snum2:number) {
//     return snum1 - snum2
// }
// let subresult = sub(45,67)
// console.log(subresult);
// function mul(mnum1:number,mnum2:number) {z/
//     return mnum1 * mnum2
// }
// let mulresult = mul(45,67)
// console.log(mulresult);
// function div(dnum1:number,dnum2:number) {
//     return dnum1 / dnum2
// }
// let divresult = div(45,67)
// console.log(divresult);
// ******************************************************************************
//                               (DEFAULT PARAMETER)
// function greet(myname = "User") {
//     console.log(`HELLO ${myname}`);
// }
// greet("zainab")
// greet()
// ******************************************************************************
// function greet(age:number,myname:string = "user") {
//     console.log(`Hello ${myname} and your age is ${age}`);
// }
// greet(17,"zainab")
// greet(27)
// ******************************************************************************
//                      (RETURN VALUE I NUMBERS)
// function sum(num1:number,num2:number): number {
//     return num1 + num2
// }
// let result = sum(67,90)
// console.log(result);
// ******************************************************************************
//                    (SIMPLE ARROW FUNCTION)
//  let greet = ()=>{
//     console.log("hello world");
// }
// greet()
// ******************************************************************************
// let greet = (name:string)=>{
//     console.log(`hello ${name}`);
// }
// greet("zainab")
// ******************************************************************************
//                              (SINGLE LINE EXECUTION)
// let greet = (name:string) => `hello ${name}`
// console.log("okasha");
// ******************************************************************************
// let greet = (name: string): string => `HELLO ${name}`;
// let result = greet("ZAINAB KHIMJI");
// console.log(result);
// ******************************************************************************
// ***************************** HOME WORK   *************************************************
let greet = (num1) => num1 % 2 == 0 ? "its even" : "its  odd";
console.log(greet(24));
console.log(greet(87));
// ******************************************************************************
