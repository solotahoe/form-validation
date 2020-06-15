console.log("hahaha");

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const small=document.getElementById("smalo");
console.log(small);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
//get values of the inputs
const usernameValue=username.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();
const password2Value=password2.value.trim();
    if(usernameValue===""){
    //show error
    //add error class
    setErrorFor(username, "username cannot be blank");
    }else{
        //add success class
        setSucessFor(username);
    } 
    if(emailValue==""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
    }else{
        setSucessFor(email); 
    }

    if(passwordValue===""){
    setErrorFor(password, "password cannot be blank");

    }else{
        setSucessFor(password);
    }

    if(password2Value===""){
        setErrorFor(password2, "password2 cannot be blank");
    
        }else if(passwordValue !== password2Value){
            setErrorFor(password2, "password does not match");
        }else{
        setSucessFor(password2);

        }
    
}

function setErrorFor(input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
        //add error message inside small
        small.innerHTML=message;

        //add error class
        formControl.className="form-control error"
}

function setSucessFor(input){
    const formControl=input.parentElement;
    formControl.className="form-control success"


}
function isEmail(email){
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}