const arr=[1,2,3,4,5]

for(let ele of arr){
    console.log(ele)
}

const name="Anwar"
for(const ele of name){
    console.log(ele)
}

//Map->key value pair, unique value pair and insertion order is preserved
const map=new Map();
map.set("name","Anwar")
map.set("age",24)
for(const ele of map){
    console.log(ele)
}

const myMap=new Map();
myMap.set("IN","India")
myMap.set("US","United States")
myMap.set("IN","India")
myMap.set("UK","United Kingdom")
// for(const ele of myMap){
//     console.log(ele);
// }
// [ 'IN', 'India' ]
// [ 'US', 'United States' ]
console.log(myMap);//Map(2) { 'IN' => 'India', 'US' => 'United States' }
for(const [key,value] of myMap){ //destructuring item of myMap){
    console.log(`${key} : ${value}`);
}
const arr1=['Anwar',24]
//destructuring
 const [key,value]=arr1;
 console.log(key,value)