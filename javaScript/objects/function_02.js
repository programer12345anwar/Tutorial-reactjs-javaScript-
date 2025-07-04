//map can be used if we want to transform whole the array
const arr=[1,2,3,4]
function double(x){
    return 2*x
}
const num=arr.map(double)//original array will not be affected, updated array will be assigned to num
// console.log(double) it will print function and it's body
console.log(num)
console.log(arr)//returns original array, so map will not change the original array

const num1=arr.map(function(x){
    return 3*x;
});
console.log(num1)

//By using arrow function
const num2=arr.map((x)=>{
    return 3*x;
})
console.log(num2)
//higher order function: a function which takes another function as an argument is called higher order function