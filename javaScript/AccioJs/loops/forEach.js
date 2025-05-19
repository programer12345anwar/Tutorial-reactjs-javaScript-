const arr=[1,2,3,4,5]
arr.forEach((ele,idx)=>{
    // console.log(idx,ele)
     
})
arr.forEach((ele,idx)=>{
    if(arr[idx]%2==0){
        // console.log(arr[idx]);
    }   
})

// console.log(arr.filter(ele => ele % 2 === 0).join(' '));

let result = '';
arr.forEach((ele, idx) => {
    if (arr[idx] % 2 === 0) {
        result += arr[idx] + ' ';
    }
});
// console.log(result.trim());

//******************************** */
const arrEle=arr.forEach((ele,idx)=>{
    if(ele%2===0){
        console.log(ele)
        return ele;
    }
})
console.log({arrEle})//{ arrEle: undefined }

const arrEle1=arr.map((ele,idx)=>{
    if(ele%2===0){
        console.log(ele)
        return ele;
    }
})
console.log({arrEle1}) // { arrEle1: [ 2, 4 ] }
//NB: map return a value and forEach doesn't return any value it will give undefined

/* The primary difference between forEach() and map() in JavaScript lies in their purpose and return value. forEach() is used to iterate over an array and perform side effects like logging or modifying external variables, but it does not return anything—its return value is always undefined. On the other hand, map() is designed to transform each element in the array and returns a new array containing the results of those transformations. Use forEach() when you don’t need a result array and are only performing operations, and use map() when you want to create and work with a transformed array based on the original.*/



