console.log(2>1)//true
console.log(2<1)//false
console.log(2>=1)//true
console.log(2<=1)//false
console.log(2==1)//false
console.log(2!=1)//true

console.log("2"==2)//false
console.log("2"===2)//false
console.log("2"!==2)//true
console.log("2">1)//true
console.log("2"<1)//false

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//false

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
//NB: avoid null and unmdefined compariso

//===(strict check of value and type)
console.log("2"===2)//false different data type
console.log("2"==2)//true
