const score=100;
console.log(score.toString().length)//3

const score1=33.3333;
console.log(score1.toFixed(2))//33.33

const score2=245623546757;
console.log(score2.toLocaleString())//2,45,62,35,46,757,by default it wil print in the current locale of the user 
console.log(score2.toLocaleString("en-US"))//245,623,546,757, it will print in US locale
console.log(score2.toLocaleString("hi-IN"))//2,45,62,35,46,757, it will print in IN locale

//==============================Math Methods==========================================
console.log(Math.E)//2.718281828459045
console.log(Math.PI)//3.141592653589793
console.log(Math.SQRT2)//1.4142135623730951
console.log(Math.SQRT1_2)//0.7071067811865476

console.log(Math.abs(-4))//4
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4
console.log(Math.min(3,4,5,6))//3
console.log(Math.max(3,4,5,6))//6

console.log(Math.random())//random number between 0 and 1
console.log(Math.floor((Math.random()*10)+1))//random number between 1 and 10
//explanation:Math.random() will give 0to1
//max value wll be 0.9 when multiplyed by 10 ,it will give 9 and +1 so from 0 to 10

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)))//random number between 0 to 10,because max-min+1=11(11 is not included)


console.log(Math.floor(Math.random()*(max-min+1)+min))//random number between 10 to 20,because max-min+1=11 and min=10 so 10+11=21 , random number between 10 to 21(21 is not included)