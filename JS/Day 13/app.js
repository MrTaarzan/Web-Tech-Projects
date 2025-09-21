    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("dblclick",()=>{
        console.log("Hello World");
        
    });


function changeColor(){
    let head = document.getElementById("head");
    head.style.color="blue"
};

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",changeColor);

function increment(){
    let count = document.getElementById("count");
    count.innerText = Number(count.innerText)+1;
}

function decrement(){
    let count = document.getElementById("count");
    count.innerText = Number(count.innerText)-1;
}

function hide(){
    let head = document.getElementById("heading");
    head.style.visibility="hidden";
}

function show(){
    let head = document.getElementById("heading");
    head.style.visibility="visible";
}

function changeToColor(color){
    let head = document.getElementById("heading");
    head.style.color=color;
}