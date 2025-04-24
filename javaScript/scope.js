// let a=10
// const b=20
// var c=30
if(true){
    let a=40
    const b=50
    var c=60
    // console.log(a,b,c)//40,50,60
}
// console.log(a)//ReferenceError: a is not defined
// console.log(b)//ReferenceError: b is not defined
console.log(c)//60

//NB: let and const are block scoped and var is function scoped

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//video:22
//Nested scope

function one(){
    const username="Anwar"
    function two(){
        const website="codewithharry.com"
        console.log(username)//const is block scoped so it will be accessible here 
         
    }
    //console.log(website)//ReferenceError: website is not defined
    two()//first username will be executed and then console.log(website) will be executed and then method two will be executed
     
}
one()