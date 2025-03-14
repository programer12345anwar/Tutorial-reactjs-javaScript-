"use strict";//to tell js to treat as modern code
var name="Anwar" //due to global scope, it is not recommended to use var in modern programming
const age=20 //const is block scoped
//age=43 TypeError: Assignment to constant variable.
//const name1; SyntaxError: Missing initializer in const declaration
//name1="Anwar"
let rollNumber=42 //let is block scoped
for(let i=0;i<1;i++){//block scope
    console.log(rollNumber)
    console.log(age)
    console.log(name)
}

for(let i=0;i<1;i++){//block scope  
    var t1="Anwar" //var is function scoped
    let t2="Anwar" //let is block scoped
    const t3="Anwar" //const is block scoped
    //it is recommended to use let and const instead of var
}
console.log(t1)
//console.log(t2) execution will stuck here :ReferenceError: t2 is not defined
//console.log(t3) if you will comment t2 then:ReferenceError: t3 is not defined
//reason: both are block scoped

//alert(3+3) ReferenceError: alert is not defined ,but if you will use it in browser console it will run fine

 //while you are writing, mainatain code readability

 //https://developer.mozilla.org/en-US/docs/Web/JavaScript mdn doc for js

 //https://tc39.es/ecma262/#sec-identifier-names doc for js


 //data types
 let name="Anwar" //string
 let age1=20 //number :range=-9007199254740991 to 9007199254740991
 let bigint=9007199254740991n //bigint for large number
 let isApproved=true //boolean
 let firstName=undefined //undefined

 console.log(typeof firstName) //output:undefined
 let selectedColor=null //null
 console.log(typeof selectedColor) //output:object
 
 let temp
 console.log(temp) //undefined
 temp=20
 console.log(temp) //20
 //symbol
 //object


