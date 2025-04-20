//singleton object
// const tinderUser=new Object()//object literal

//non-singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="anwar"
tinderUser.isLoggedIn=true

console.log(tinderUser);

const regularUser={
    email:"zVtY8@example.com",
    fullName:{
        userFullName:{
            firstName:"anwar",
            lastName:"alam"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3={...obj1,...obj2}//it's easy,  simple and latest

const obj3=Object.assign({},obj1,obj2)//it will create a new object, empty is source and rest are target
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user=[
    {
        id:"123abc",
        email:"zVtY8@example.com",
        name:"anwar",
        age:20
    },
    {
        id:"123abc",
        email:"zVtY8@example.com",
        name:"anwar",
        age:20
    },
    {
        id:"123abc",
        email:"zVtY8@example.com",
        name:"anwar",
        age:20
    },
    {
        id:"123abc",
        email:"zVtY8@example.com",
        name:"anwar",
        age:20
    }
]

//console.log(user);
console.log(user[1].email);//zVtY8@example.com
console.log(Object.keys(user));//['0', '1', '2', '3']
console.log(Object.values(user));//[ [ '123abc', 'zVtY8@example.com', 'anwar', 20 ], [ '123abc', 'zVtY8@example.com', 'anwar', 20 ], [ '123abc', 'zVtY8@example.com', 'anwar', 20 ], [ '123abc', 'zVtY8@example.com', 'anwar', 20 ] ]

console.log(Object.entries(user))//it will return key value pair

/* 
[
  [
    '0',
    {
      id: '123abc',
      email: 'zVtY8@example.com',
      name: 'anwar',
      age: 20
    }
  ],
  [
    '1',
    {
      id: '123abc',
      email: 'zVtY8@example.com',
      name: 'anwar',
      age: 20
    }
  ],
  [
    '2',
    {
      id: '123abc',
      email: 'zVtY8@example.com',
      name: 'anwar',
      age: 20
    }
  ],
  [
    '3',
    {
      id: '123abc',
      email: 'zVtY8@example.com',
      name: 'anwar',
      age: 20
    }
  ]
]
*/
console.log(user.hasOwnProperty("name"))//false
console.log(user[1].hasOwnProperty("name"))//true