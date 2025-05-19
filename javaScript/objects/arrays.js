//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//Array docs

//java script arrays resizable and can store multiple data types in single variable
const heros=["thor","ironman","spiderman",1234,5.6,true]

// console.log(heros[0])
// console.log(heros[1])
// console.log(heros[2])
// console.log(heros.length)//6
// console.log(heros[heros.length-2])//5.6

// console.log(heros)//['thor', 'ironman', 'spiderman', 1234, 5.6, true]

heros[1]="anwar"
//console.log(heros)//['thor', 'anwar', 'spiderman', 1234, 5.6, true]

heros.map((element)=>{
    //console.log(element)
})

heros.forEach((element)=>{
    //console.log(element)
})
//push:add element at last
heros.push("black panther")
//console.log(heros)//['thor', 'anwar', 'spiderman', 1234, 5.6, true, 'black panther']

//pop:remove element from last
heros.pop()
//console.log(heros)//['thor', 'anwar', 'spiderman', 1234, 5.6, true]

//shift:remove element from first
heros.shift()
//console.log(heros)//['anwar', 'spiderman', 1234, 5.6, true]

//unshift:remove element from first
heros.unshift("black panther")
//console.log(heros)//['black panther', 'anwar', 'spiderman', 1234, 5.6, true]


//declaration of an array in javaScript
const arr=new Array()//empty array
const arr1=new Array(1,2,3,4,5)//array with values
const arr2=[1,2,3,4,5,4.5,6.7,true]//array with values

//console.log(arr1)//[1, 2, 3, 4, 5]    

//console.log(arr2)//[1, 2, 3, 4, 5, 4.5, 6.7, true]

//console.log(arr)//[]
arr1.push(11)//add element at last
//console.log(arr1)//[1, 2, 3, 4, 5, 11]

arr1.pop()//remove last element
//console.log(arr1)//[1, 2, 3, 4, 5]

arr1.shift()//remove first element 
console.log(arr1)//[2, 3, 4, 5]

arr1.unshift(22)//add element at first,time consuming, because of shifting all elements one by one to right side
console.log(arr1)//[22, 2, 3, 4, 5]

//slice and splice

//slice:copy element from particular index
//splice:remove element from particular index

console.log("A",arr1,"Kishanganj")//A [22, 2, 3, 4, 5]
const arr3=arr1.slice(0,3)//copy element from particular index, start to end-1
console.log(arr3)//[22, 2, 3]

arr1.splice(0,3)//remove element at particular index(start to end-1)
console.log(arr1)//[4,5]

const newArray=arr1.join(" ")//convert array to string,if there would be comman then output will be comma separated 4,5
console.log(newArray)//4 5
 
//Array part 2
console.log("WELCOME TO THE SECOND PART OF THE ARRAY")
const arr4=[1,2,3,4,5,6]
console.log(arr4)//[1, 2, 3, 4, 5, 6]
console.log(...arr4)//1 2 3 4 5 6,spread operator

for(let i=0;i<arr4.length;i++){
    if(arr4[i]%3==0){
        console.log(arr4[i]+" is divisible by 3")
    }
}

const arr5=arr4.map((element)=>{
    return element*2
})
console.log(arr5)//[2, 4, 6, 8, 10, 12]

const arr6=arr4.filter((element)=>{
    return element%2==0//check if element is even in arr4
})
console.log(arr6)//[2, 4, 6]
console.log(...arr6)//2 4 6

const arr7=arr4.find((element)=>{
    return element>4//it will return first element which is greater than 4,if there is no element greater than 4 then it will return undefined
})
console.log(arr7)//5

const arr8=arr4.findIndex((element)=>{
    return element>4//it will return index of first element which is greater than 4,if there is no element greater than 4 then it will return -1
})
console.log(arr8)//4  [1, 2, 3, 4, 5, 6],index of 5 is 4

const arr9=arr4.every((element)=>{
    return element<10//return true if every element is less than 10
})
console.log(arr9)//true

const arr10=arr4.some((element)=>{
    return element>10//return true if any element is greater than 10
})
console.log(arr10)//false

const arr11=arr4.reduce((accumulator,element)=>{
    return accumulator+element//add all elements,accumulator=0 and element=1 then accumulator=0+1=1 and element=2 then accumulator=1+2=3
    //accumulator and element both are variable it can be any name
})
console.log(arr11)//21

const arr12=arr4.reduceRight((accumulator,element)=>{
    return accumulator+element//add all elements from right side,accumulator=6 and element=5 then accumulator=6+5=11 and element=4 then accumulator=11+4=15
    //accumulator and element both are variable it can be any name
})
console.log(arr12)//21

console.log(arr4.concat(arr5))//[1, 2, 3, 4, 5, 6, 2, 4, 6, 8, 10, 12]

console.log(...arr5,...arr4,...heros)//2 4 6 8 10 12 1 2 3 4 5 6 black panther anwar spiderman 1234 5.6 true

console.log(arr4.indexOf(5))//4
console.log(arr4.lastIndexOf(5))//4

console.log(arr4.includes(5))//true
console.log(arr4.includes(7))//false

//console.log(arr4.reverse())//[6, 5, 4, 3, 2, 1]
const arrRev=arr4.reverse()
console.log(arrRev)// [6, 5, 4, 3, 2, 1]

console.log(arr4.sort())//[1, 2, 3, 4, 5, 6]

console.log(arr4.sort((a,b)=>{//sort in descending order
    return b-a//b-a will give negative number if b<a, b-a will give positive number if b>a
}))//[6, 5, 4, 3, 2, 1]

console.log(arr4.sort((a,b)=>{//sort in ascending order
    return a-b//a-b will give negative number if a<b, a-b will give positive number if a>b  
}))//[1, 2, 3, 4, 5, 6]

//spread elements
const arr13=[1,2,3,4,5,6,[7,8,9],[10,11,12,[13,14,15,[16,17,18]]]]
console.log(...arr13)//1 2 3 4 5 6 [ 7, 8, 9 ] [ 10, 11, 12, [ 13, 14, 15, [ 16, 17, 18 ] ] ]

const arr14=[1,2,3,4,5,6,[7,8,9],[10,11,12,[13,14,15,[16,17,18]]]]
console.log(arr14.flat(Infinity))//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]

console.log(Array.isArray("Anwar"))//false
console.log(Array.from("Anwar"))//['A', 'n', 'w', 'a', 'r']//convert string to array
let score1=33
let score2=44
let score3=55   
console.log(Array.of(score1,score2,score3))//[33, 44, 55]   



