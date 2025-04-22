let temp1=Number(100)
let temp2=String("Anwar")
let temp3=Boolean(true)
//console.log(temp1,temp2,temp3)
// console.table(temp1,temp2,temp3,typeof temp1,typeof temp2,typeof temp3)
//will throw an error
console.table([temp1,temp2,temp3,typeof temp1,typeof temp2,typeof temp3])//you have write inside square bracket

//Non premitive datatype
//Array,Object,function
//everything in javaScript is considered as an Object

let arr=[1,2,3,4,5]
//object stores data in the form of key value pair
/*
let obj={
    name:"anwar",
    age:20
}
    */
let function1=function(){
    console.log("hello")
}
//or
let function2=()=>{
    //console.log("hello")
    return "hello"
}
function2();//
// console.log(function2) //[Function: function2],function2 is not a variable it is a function name
console.log(function2())//now it will return hello
//or
function abc(){
    console.log("hello abc")
}
//calling function
abc();

console.log(typeof arr)//object
// console.log(typeof obj)//object
console.log(typeof function1)//function

const obj={
    name:"anwar",
    age:20
}
const obj2=obj;
obj2.name="Anwar Alam"
console.log(obj,obj2)//{ name: 'Anwar Alam', age: 20 } { name: 'Anwar Alam', age: 20 }

/* JavaScript Object Heap or Stack
In JavaScript, objects are created in the heap, not the stack. The heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored. This allows for flexible memory allocation, which is necessary for objects that can change size or hold various properties.

When you declare an object, JavaScript creates a reference to the location in the heap rather than storing the data itself on the stack. For example, if you have an object person, the variable person is stored in the stack, but the actual object data is stored in the heap.

This distinction is important because it affects how changes to objects are handled. If you create a new variable that references the same object, changes to one variable will affect the object referenced by the other variable, as they both point to the same location in the heap.

To avoid this issue and create a separate copy of the object, you can use methods like JSON.parse(JSON.stringify(object)) for deep copying or Object.assign() for shallow copying*/
