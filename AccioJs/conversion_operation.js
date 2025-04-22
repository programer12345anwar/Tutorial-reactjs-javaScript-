let myNumber="42"
// console.log(myNumber,typeof myNumber) //string
myNumber=Number(myNumber)
// console.log(myNumber,typeof myNumber) //number

let name="Anwar"//String type
name=Number(name)
// console.log(typeof name)
// console.log(name)


let isLogged=null;
isLogged=Boolean(isLogged)
console.log(typeof isLogged)//boolean
console.log(isLogged)//false

let isLogedIn="kishanganj"
isLogedIn=Boolean(isLogedIn)
console.log(typeof isLogedIn)//boolean
console.log(isLogedIn)//true, any value will be true

let num=0
num=Boolean(num)
console.log(typeof num)//boolean
console.log(num)//false

let num1=1
num1=Boolean(num1)
console.log(typeof num1)//boolean
console.log(num1)//true

let num2="0"
num2=Boolean(num2)
console.log(typeof num2)//boolean
console.log(num2)//true,because of string value, so any string value it will give true

let num3=""
num3=Boolean(num3)
console.log(typeof num3)//boolean
console.log(num3)//false,now it will give false because of empty string

let someNum=22
let stringNum=String(someNum)
console.log(typeof stringNum)//string
console.log(stringNum)//22

//====================================Some operations====================================
let str1="Anwar"
let str2="Kishan"
let str3=str1+str2
console.log(str3)//AnwarKishan
console.log(str1-str2)//NaN,because it is not a number
console.log(str1+str2)//AnwarKishan,+ will acts as a concatenation
console.log(str1*str2)//NaN,because it is not a number

// console.log("1"+2)//12
// console.log(1+"2")//12, it will acts as a concatenation
//String+String=Concatenation
//String+Number=Concatenation
//Number+String=Concatenation

// console.log(1+2+"3")//33, 1+2=3, 3+"3"=33
// console.log("2"+3+"4")//234, "2"+3=23, 23+"4"=234
console.log("2"+3*4)//212, "2"+3=23, "23"*4=212
console.log("2"*10)//20, "2"*10=20
//NB:String*Number=number(we will get multiplyed result)

console.log(2*3+"4")//64, 2*3=6, 6+"4"=64
//NB: javaScript is dynamically typed language
//NB: javaScript is case sensitive
//NB: javaScript is flexible

console.log(+"2")//2
console.log(+true)//1
console.log(+"")//0
// console.log(true+)//error:unexpected token
// console.log(true++)//error:unexpected token
// console.log(++true)//error:unexpected token
console.log(true+true)//2
console.log(true+false)//1 1+0=1
console.log(+false)//0

// console.log(++2)//SyntaxError: Invalid left-hand side expression in prefix operation
// console.log(5++)//SyntaxError: Invalid left-hand side expression in postfix operation

console.log(+2)//2
// console.log(5+)//SyntaxError: Unexpected token ')'

let x=1
console.log(++x)//2
console.log(x++)//2
console.log(x)//3
//you can use postfix and prefix both on variable but not on constant value

//=========================relational operator==========================
console.log("comparison between number")
console.log(2>3)//false
console.log(2<3)//true
console.log(2>=3)//false
console.log(2<=3)//true
console.log(2==3)//false
console.log(2!=3)//true

console.log("comparison between string and number")
console.log("2"==2)//true
console.log("2"===2)//false,=== is strict check
console.log("2"!==2)//true
console.log("2">1)//true
console.log("2"<1)//false

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0,"this is for null comparison,good for interview question")//true

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
//NB: avoid null and unmdefined comparison

