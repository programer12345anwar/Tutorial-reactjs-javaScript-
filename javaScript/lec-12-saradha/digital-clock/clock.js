function clock(){
    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let period="AM"
    if(hours>=12){
        period="PM"
    }
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;

    let currentTime=`${hours}:${minutes}:${seconds}:${period}`
    document.getElementById("clock").textContent=currentTime;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = now.toLocaleDateString("en-US", options);
    document.getElementById("date").textContent = today;
}

//initial call
clock();

//call the above function after every second
setInterval(clock,1000);

