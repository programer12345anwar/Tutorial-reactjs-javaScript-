let score=44
/*
console.log(typeof score) //number
console.log(typeof(score)) //string
*/
let score1="33"
/*
console.log(typeof score1) //string
//conversion to number
score1=Number(score1)
let x1=Number(score1)
console.log(typeof score1) //number
console.log("value after conversion to number",x1)//33
console.log("after conversion, type is: ",typeof(x1))//number

let score2="33abc"
console.log(typeof score2) //string
//conversion to number
score2=Number(score2)
let x2=Number(score2)
console.log(typeof score2) //number
console.log("value after conversion to number",x2)//NaN
console.log("after conversion, type is: ",typeof(x2)) //number
*/
/*
console.log("FOR NULL")
let score3=null
console.log(typeof score3) //object
//conversion to number
score3=Number(score3)
let x3=Number(score3)
console.log(typeof score3) //number
console.log(x3)
console.log(typeof(x3))//number

console.log("FOR UNDEFINED")
let score4=undefined
let x4=Number(score4)
console.log(typeof score4) //undefined
//conversion to number
score4=Number(score4)
console.log(typeof score4) //number
console.log(x4)
console.log(typeof(x4))//number

console.log("FOR BOOLEAN")
let score5=true
console.log(typeof score5) //boolean
//conversion to number
score5=Number(score5)
let x5=Number(score5)
console.log(typeof score5) //number
console.log(x5)
console.log(typeof(x5))
*/

/*NB:"33"=>33
"33abc"=>NaN
null=>0
undefined=>NaN
true=>1
false=>0
*/

//CONVERSION INTO BOOLEAN
let isBool=1
console.log(Boolean(isBool))//true

let isBool2=""
console.log(Boolean(isBool2))//false

let isBool4="0"
console.log(Boolean(isBool4))//false

let isBool5="false"
console.log(Boolean(isBool5))

let isBool6="true"
console.log(Boolean(isBool6))

let isBool7="anwar"//if you will give any value it will be true
console.log(Boolean(isBool7))

//NB:"0"=>false
//""=>false
//null=>false
//undefined=>false
//NaN=>false
//"XYZ"=>true
//true=>true
//"false"=>true OR "true"=>true it will treated as a value

//CONVERSION INTO STRING
let myNum=33
console.log(String(myNum))//33
console.log(typeof(String(myNum)))//string