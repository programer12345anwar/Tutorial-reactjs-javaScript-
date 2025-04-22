let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.getTime())//time in milliseconds
console.log(date.getFullYear())
console.log(date.getMonth()+1)//0 based index
console.log(date.getDay())//0 based index,from sunday to saturday
console.log(typeof date)//object

const date1= Date.now()
// console.log(date1.getDay())//TypeError: date1.getDay is not a function
let myDate=new Date();
console.log(myDate.getDay())//0 based index,from sunday to saturday
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())
console.log(myDate.getUTCMilliseconds())
console.log(myDate.getUTCHours())
 