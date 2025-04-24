/*function is a reusable block of code that performs a specific task.function are crucial for organizing code,making it modular,reusable and maintainable
importance:
1.code reusability
2.improved organization
3. easier debugging
4.increased mainability
5.better code readability*/ 

function myfunc(){
    console.log("this is my function")
}
myfunc();//calling function

function addTwoNumber(num1,num2){
    // return num1+num2
    // num3=num1+num2
    // return num3
    console.log("sum of two number is ",num1+num2)//23, 2+"3"=23
}
//console.log(addTwoNumber("sum of two number is ",(2,3)))//here will print returned value,since we have not returned anything so it will print undefined

addTwoNumber(2,"3")//2 and "3" are parameters

function addTwoNumber1(num1,num2){
    //return num1+num2 
    // console.log("sum of two number is ",num1+num2)//unreachable code,b'z of return statement
    console.log(num1+num2)
}

const result=addTwoNumber1(2,3)
console.log(result)

function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("please enter a username")
    //     return
    // }
    if(!username){
        console.log("please enter a username")
        return;//above code is same as that
    }
    return `logged in user is ${username}`
}

//console.log(loginUserMessage("anwar"))
// let username=loginUserMessage("anwar")
let username=loginUserMessage()
console.log(username)//if you will not pass any parameter then you will get undefined

//function part:2

function calculateCartPrice(...num1){
    return num1 //[ 200, 300, 400 ]
    // let sum=0
    // for(let i=0;i<num1.length;i++){
    //     sum=sum+num1[i]
    // }
    // return sum
}

console.log(calculateCartPrice(200,300,400))//[ 200, 300, 400 ], rest parameter

function calculateCartPrice1(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice1(200,300,400,2000))

const user={
    username:"anwar",
    age:24
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

// handleObject(user)
handleObject({
    username:"anwar",
    age:24
})//we can also pass object like this

const myNewArray=[200,100,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,500,600]))//we can pass array like this also

