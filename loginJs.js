const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameRegEx =/^[a-zA-Z ._-]*$/;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

loginForm.addEventListener('submit', (event)=>{
    let validForm = true;
    event.preventDefault();

    if(username.value===""){
        alert("No username was entered");
        validForm=false;
    }

    if(password.value===""){
        alert("No password was entered");
        validForm=false;
    }

    if(!usernameRegEx.test(username.value)){
        alert("Your username does not respect the above condition");
        validForm=false;
    }
    
    if(!passwordRegEx.test(password.value)){
        alert("Your password does not respect the above condition");
        validForm = false;        
    }

    if(validForm){
        loginForm.submit();
    }

});