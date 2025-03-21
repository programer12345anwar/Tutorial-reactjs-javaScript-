//basically we have only two data types in javaScript
//primitive data types
//non-primitive data types

//primitive data types:7(primitive data type is call by value)
//string
//number
//boolean
//null
//undefined
//symbol
//bigint
let num1=10
let num2=123.5//both type is number
const id =Symbol('123')//symbol
const anotherId=Symbol('123')//symbol

console.log(id===anotherId)//false

//non-primitive data types:2(non-primitive data type is call by reference)
//array
//object
//function

const heros=["thor","ironman","spiderman"]
console.log(typeof heros)//object
 let obj={
     name:"anwar",
     age:20//in object data is being stored in the form of key value pair
 }
 console.log(typeof obj)//object

 const myFunc=function(){
     console.log("hello world")
 }
 console.log(typeof myFunc)//function
//NB: java script is dynamically typed language b'z of it is flexible(type is determined at run time)

//NB: java script is case sensitive

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//video:10
//stack(primitive data type), Heap(non primitive data type)
let name="anwar_java"
let anotherName=name
// console.log(name)
// console.log(anotherName)
anotherName="kishanganj"
console.log(anotherName)

let user1={
    email:"mdanwar40212@gmail.com",
    upi:"mdanwar@oksbi"
}
let user2=user1
user2.email="21btcs042hy@gmail.com"

console.log(user1.email)//21btcs042@gmail.com
console.log(user2.email)//21btcs042@gmail.com




