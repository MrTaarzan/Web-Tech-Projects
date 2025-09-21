let reg_form = document.getElementById("reg_form");
reg_form.addEventListener(("submit"),(event)=>{
    event.preventDefault();

    let fname = event.target.fname.value.trim();
    let lname = event.target.lname.value.trim();
    let email = event.target.email.value.trim();
    let age = event.target.age.value.trim();
    let pass = event.target.pass.value.trim();
    let cpass = event.target.cpass.value.trim();
    
    if(fname==""){
        alert("Please Enter First Name");
        
    }

    else if(lname==""){
        alert("Please Enter Last Name");
        
    }
    else if(email==""){
        alert("Please Enter the Email");
        
    }
    else if(age==""){
        alert("Please Enter Age");
        
    }
    else if(!Number(age)){
        alert("Age must be a number");
        
    }
    else if(age<18){
        alert("Age should be greater than 17");
    }
    else if(pass==""){
        alert("Please Enter Password");
        
    }
    else if(pass.length < 8 || pass.length > 12){
        alert("Password should be between 8-12 characters")
    }
    else if(cpass==""){
        alert("Please Confirm Password");
        
    }
    else if(pass!=cpass){
        alert("Passwords Do not Match");
        
    }
    else{
        alert("Data Entered Successfully")
        let user = {
            name: fname + " " +lname,
            email: email,
            age : age,
            password : pass
        }
        console.log(JSON.stringify(user));
        reg_form.reset();
    }
})