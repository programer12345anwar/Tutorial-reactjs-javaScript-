//object and event is one of the most important part of javaScript
//object is a collection of key value pair

//singleton 

//object literal

const mySymbol=Symbol("key1")
const obj={
    name:"anwar",
    "full name":"md anwar alam",
    age:20,
    mySymbol:"myKey1"// it will be acts as a string
    ,
    [mySymbol]:"myKey1",
    email:"mdanwar40212@gmail.com",
    rollNumber:42,
    phone:1234567890,
    isApproved:true,
    lastLoginDays:["monday","tuesday","wednesday"],
    address:{
        ward:16,
        city:"Begusarai",
        state:"Bihar",
        country:"India",
        pincode:855108
    }
}

//console.log(obj)

//dot notation
console.log(obj.name)
console.log(obj["name"])//if you are accessing value using [] then you have to write key in ""

//console.log(obj."full name")//this is not allowed, error will come
console.log(obj["full name"]) 
console.log(obj[mySymbol])//myKey1
console.log(typeof obj[mySymbol])//string

obj.email="21btcs042@gmail.com"
console.log(obj.email)//21btcs042@gmail.com
//if you want noone can change the value then use freeze

// Object.freeze(obj)
obj.email="manwarcse25@gmail.com"
console.log(obj.email)//21btcs042@gmail.com

console.log(obj)

//add greeting to the obj
obj.greeting=function(){
    console.log("Hello js user")
}
obj.greetingTwo=function(){
    console.log(`Hello js user, ${obj.name}`)
}

//console.log(obj.greeting)//[Function (anonymous)]

console.log(obj.greeting())//Hello js user
console.log(obj.greetingTwo())//Hello js user
 