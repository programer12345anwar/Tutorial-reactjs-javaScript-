const myObj={
    "IN":"India",
    "US":"United States",
    "UK":"United Kingdom",
    "CA":"Canada",
    "AU":"Australia"
}

for(const key in myObj){
    console.log(key,myObj[key])
}

const lang=["hindi","english","hindi","hindi"]
for(const key in lang){
    //console.log(key)//0,1,2,3
    console.log(key,lang[key])
}