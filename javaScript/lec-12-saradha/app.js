console.log("anwar");
console.log("alam");
console.log("kishanganj");

// function hello(){
//     // return "begusarai"
//     console.log("hello-begusarai");
// }
// setTimeout(hello,4000);

//OR

setTimeout(()=>{
    console.log("hello-kishanganj");
},4000)

console.log("one");
console.log("two");
/* 
anwar
alam
kishanganj
one
two
hello-kishanganj*/

//call back->synchronous and setTimeout-->asynchronous
const temp=()=>{
    console.log("welcome");
}

// setTimeout(temp,2000);
console.log(temp);// it will print call back function with body

// setInterval(()=>{
//     console.log("set interval");
// },2000);

// document.getElementById('btn').addEventListener("click",function(){

//     alert("clicked")
// });
