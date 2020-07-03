
const username=document.getElementById("username");
const email=document.getElementById("email");
const Password=document.getElementById("Password");
const Password2=document.getElementById("password2");
const button=document.getElementById("button");
const form=document.getElementById("form");


form.addEventListener("submit", checkSubmit, false);

function checkSubmit(event){
    event.preventDefault();
    validateInputs();
}






function validateInputs(){

    //validate username
    const usernameValue=username.value.trim();
    const passwordValue=Password.value.trim();
    const emailValue=email.value.trim();
    const passwod2Value=Password2.value.trim();
    console.log(usernameValue);
    if(usernameValue===""){
        errorClass(username,"Username cannot be blank");
    }else if(usernameValue.length < 5){
        lengthFunction(username, "Username must contain atleast five characters");
    }else{
        successClass(username);
    }
    //validate passoword
    if(passwordValue===""){
        errorClass(Password,"password cannot be blank");
    }else if(passwordValue.length < 5){
        lengthFunction(Password, "Password must contain atleast five characters");
    }else{
        successClass(Password);
    }

    //validate the email
    if(emailValue===""){
        errorClass(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        errorClass(email, "Please enter a valid email");


    }else{
        successClass(email);
    }
    //valdiate password 2
    if(passwod2Value===""){
        errorClass(Password2,"confirmation cannot be blank");
    }else if(passwod2Value!=passwordValue){
        errorClass(Password2, "password does not match");
    }else{
        successClass(Password2);
    }




}





function successClass(input){
    const formControl=input.parentElement;
    console.log(formControl);
    formControl.className="form-controls success";
}


function errorClass(input,message){
    const formControl=input.parentElement;
    formControl.className="form-controls error";
    const small=formControl.querySelector("small");
    small.innerHTML=message;
}
function lengthFunction(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
    formControl.className="form-controls error";
    small.innerHTML=message;
}


//checking for a valid email

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    

}

//SHOW PASSOWORD CODE
const checkbox1=document.querySelector(".c1");
checkbox1.addEventListener("click", showPassword);
function showPassword(){
    const password1=document.getElementById("Password");
    if(password1.type==="password"){
        password1.type="text";

    }else{
        password1.type="password";
    }



}
//SHOW PASSWORD FOR CONFIMATION CODE
const checkbox2=document.querySelector(".c2");
checkbox2.addEventListener("click", showPassword2);
function showPassword2(){
    const password22=document.getElementById("password2");
    if(password22.type==="password"){
        password22.type="text";

    }else{
        password22.type="password";
    }



}
