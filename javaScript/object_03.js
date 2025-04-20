const course={
    courseName:"JavaScript",
    courseInstructor:"Anwar",
    courseDuration:"4 months",
    courseFee:20000,
    courseLevel:"Beginner"  
}

// console.log(course)
const {courseInstructor:instructor}=course

 console.log(instructor)//Anwar


//Destructuring
/*
const navbar=({company})=>{
    //we dont need write props.company, we can directly write company by using destructuring
    console.log(company)
}
navbar(company="Google")
*/

//API: Application Programming Interface

const user={
    "name":"anwar",
    "email":"zVtY8@example.com",
    "password":"123abc",
}
//or
const user1=[
    {},
    {},
    {}
]
//Jason formatter is used for this purpose to create json file in browser or in postman 

