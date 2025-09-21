// console.log("start");
// setTimeout(()=>{
//     let heading="Hey Boi";
//     console.log(heading);
    
// },4000)
// console.log("End");

// console.log("2nd Start");

// setInterval(()=>{
//     document.writeln("Hello");
// },3000)

// console.log("2nd End");

let id;
let ms;

function start(){
    clearInterval(id);
    let count = document.getElementById("count");
    id = setInterval(()=>{
        count.innerText = Number (count.innerText)+1;
    },1000)
    let milli = document.getElementById("milli");
    ms= setInterval(()=>{
        milli.innerText = Number (milli.innerText)+1;
        if(milli.innerText>99){
        milli.innerText=0o0;
    }
    },10)
}

function stop(){
    clearInterval(id); 
    clearInterval(ms)
}

function reset(){
    let count = document.getElementById("count");
    let milli = document.getElementById("milli");
    count.innerText=0;
    milli.innerText=0o0;
}