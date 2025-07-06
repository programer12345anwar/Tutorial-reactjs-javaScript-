let count=0;
// let content=document.getElementById("counter")
let content=document.querySelector(".counter")
let incrementbtn=document.getElementById("increment")
let decrementbtn=document.getElementById("decrement")
let resetbtn=document.getElementById("reset")

//apply addEventListener for each buttons
incrementbtn.addEventListener("click",()=>{
    count++;
    content.textContent=count;
})

decrementbtn.addEventListener("click",()=>{
    if(count !== 0){
        count--;
    }
    content.textContent=count;
})

resetbtn.addEventListener("click",()=>{
    count=0;
    content.textContent=count;
})