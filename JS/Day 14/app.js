function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}

let employees=[
    new Employee("Abhinav",21,75000),
    new Employee("Anusha",22,55000),
    new Employee("Gaanasri",23,45000),
    new Employee("Drisya",24,35000),
    new Employee("Karthik",20,95000)
]

function displayData(data){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    for(let i=0 ; i<data.length ;i++ ){
    tbody.innerHTML+=`
            <tr>
                <td>${i+1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].age}</td>
                <td>${data[i].salary}</td>
                <td><button onclick="deleteEmp(${i})">Delete</button></td>
            </tr>
    `
}
let total_sal=0;
for(let emp of data){
total_sal+=emp.salary;
}
console.log(total_sal);
let tfoot = document.getElementById("tfoot");
tfoot.innerHTML=`
            <tr>
                <td colspan="3">Total Salary</td>
                <td>${total_sal}</td>
            </tr>
`
}

let btn = document.getElementById("display")
btn.addEventListener("click",()=>{
    displayData(employees);
});

function ascendingBySal(){
    employees.sort((a,b)=>(a.salary-b.salary));
    displayData(employees);
}

function descendingBySal(){
    employees.sort((a,b)=>b.salary-a.salary);
    displayData(employees);
}

function ascendingByAge(){
    employees.sort((a,b)=>a.age-b.age);
    displayData(employees);
}

function descendingByAge(){
    employees.sort((a,b)=>b.age-a.age);
    displayData(employees)
}

function ascendingByName(){
    employees.sort((a,b)=>{if(a.name>b.name){return 1} else {return -1}});
    displayData(employees);
}

function descendingByName(){
    employees.sort((a,b)=>{if(a.name<b.name){return 1} else {return -1}})
    displayData(employees);
}

function deleteEmp(idx){
    employees.splice(idx,1);
    displayData(employees);
}

let s_btn = document.getElementById("s_btn");
let s_inp = document.getElementById("s_inp");

s_btn.addEventListener("click",()=>{
    let name = s_inp.value.trim().toLowerCase();
    if(name==""){
        alert("Please enter Name");
    }
    let res = employees.filter((ele)=>ele.name.toLowerCase().includes(name));
    displayData(res);
})

s_inp.addEventListener("input",()=>{
    let name = s_inp.value.trim().toLowerCase();
    // if(name==""){
    // }
    let res = employees.filter((ele)=>ele.name.toLowerCase().includes(name));
        displayData(res);
})