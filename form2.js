console.log("won");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const form=document.getElementById("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    checkInputs();
    
});

function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const passsword2Value=password2.value.trim();
//username validation
            if(usernameValue===""){
                //add error classs
                addErrorClass(username, "Username cannot be blank");

            }else{
                //add ther success class

                addSuccessClass(username, "completed");
            }
        //email validation
            if(emailValue===""){
            //email cannot be blank
            addErrorClass(email, "Email cannot be blank")

            }else if(!isEmail(emailValue)){
                //email is not valid
                addErrorClass(email, "Email is not valid");

            }else{
                //add success classs
                addSuccessClass(email, "completed");
            }

        //password validation

            if(passwordValue===""){
                addErrorClass(password, "Password cannot be blank");

            }else{
                addSuccessClass(password, "completed");
            }

        //password check validation

        if(passsword2Value===""){
            addErrorClass(password2, "Password cannot be blank")

        }else if(passsword2Value!==passwordValue){
            addErrorClass(password2, "Passoword does not match");

        }else{
            addSuccessClass(password2, "completed");
        
        }
        
        const small=document.querySelectorAll("#smalo");

       setTimeout(congrats, 1000);
        
        function congrats(){
   
        if(small[0].textContent && small[1].textContent && small[2].textContent  && small[3].textContent==='completed'){
            
            alert("DONE!!!! NOW SUBMIIT");

        }
    }

}

function addErrorClass(input, message){
const formCotrol=input.parentElement;
const small=formCotrol.querySelector("small");
formCotrol.classList.remove("success");
formCotrol.classList.add("error");
small.style.visibility="visible";
small.style.color="#e47c3c";
small.innerHTML=message;

}

function addSuccessClass(input, message){
    const formCotrol=input.parentElement;
    const small=formCotrol.querySelector("small");
    formCotrol.classList.remove("error");
    formCotrol.classList.add("success");
    small.style.visibility="visible";
    small.style.color="#00FF00";
    small.innerHTML=message;


}

function isEmail(email){
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
   
}



