const fruits=['apple','orange','banana','blackberry']
const fruits2={0:'apple',1:'orange',2:'banana',3:'blackberry'}

console.log(typeof fruits)//object
console.log(typeof fruits2)//object

console.log(fruits[0])//apple here 0 is index
console.log(fruits2[0]);//apple here 0 is key

//adding and removing elements
fruits.push('pineapple')// push method add an element to the end of the array
console.log(fruits)//[ 'apple', 'orange', 'banana', 'blackberry', 'pineapple' ]

fruits.pop()//remove element from the last of the array
console.log(fruits)//[ 'apple', 'orange', 'banana', 'blackberry']

fruits.unshift('cherry')//unshift method add the element to the beginning of the array
console.log(fruits)//[ 'cherry', 'apple', 'orange', 'banana', 'blackberry' ]

//shift() method is used to remove an element from the beginning and unshift() method is used to add an element at the beginning of the array
fruits.shift()//remove an element from the beginning 
console.log(fruits)//[ 'apple', 'orange', 'banana', 'blackberry' ] 

//splice()-> add or remove elements from the array
//syntax: array.splice(start,deleteCount,element1,element2,...)
fruits.splice(1,0,'dragan fruits')
console.log(fruits)//[ 'apple', 'dragan fruits', 'orange', 'banana', 'blackberry' ]
fruits.splice(2,1,'santra','kivi','pineapple')//we can add any number of element
console.log(fruits)
//[
//   'apple',
//   'dragan fruits',
//   'santra',
//   'kivi',
//   'pineapple',
//   'banana',
//   'blackberry'
// ]

//NB: we can add an array to the given array by using splice() method
const arr1=[1,2,3,4,5,6,7,8,9]
const arr2=[5,6,7,8,9]
//arr1.splice(2,0,...arr2)//destructuring ...arr2 otherwise output:[1,2,[5,6,7,8,9],3,4]
//console.log(arr1)//[1,2,5,6,7,8,9,3,4]

//slice()-> return sallow copy of a portion of the array

//const slicedArray=arr1.slice(2,5)//start to end-1
//console.log(slicedArray)//[5,6,7]
const temp=arr1.slice(2)//start is given only so start to end
console.log(temp)//[3,4]
//NB:print last three elements of the array
console.log(arr1.slice(-3))//[2,3,4]
console.log(arr1[arr1.length-1])//4
 const temp1=arr1.slice(-5,-2)//stat must be greater negative value,5th from last to 2nd from last will be printed
 console.log(temp1)//[ 5, 6, 7 ]



