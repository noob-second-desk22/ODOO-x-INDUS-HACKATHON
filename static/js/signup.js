document.getElementById("signupForm").addEventListener("submit", function(e){
    let valid = true

    let loginId = document.getElementById("loginId").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    document.getElementById("loginError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    if(loginId.length < 6 || loginId.length > 12){
        document.getElementById("loginError").textContent =
        "Login ID must be between 6 and 12 characters";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }


    let passwordError = validatePassword(password.value);
    
    if(passwordError !== ""){
    document.getElementById("passwordError").textContent = passwordError;
    password.value = ""
    valid = false;
    }

    if(password.value !== confirmPassword.value){
        document.getElementById("confirmError").textContent = "Passwords do not match";
        confirmPassword.value = ""
        valid = false;
    }

    if(!valid){
        e.preventDefault();
    }
});

function validatePassword(password){
    if(password.length <= 8){
        return "Password must be longer than 8 characters";
    }

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

    for(let i = 0; i < password.length; i++){

        let char = password[i];

        if(char >= 'a' && char <= 'z'){
            hasLower = true;
        }
        else if(char >= 'A' && char <= 'Z'){
            hasUpper = true;
        }
        else if(char >= '0' && char <= '9'){
            hasNumber = true;
        }
        else{
            hasSpecial = true;
        }
    }

    if(!hasLower){
        return "Password must contain a lowercase letter";
    }

    if(!hasUpper){
        return "Password must contain an uppercase letter";
    }

    if(!hasNumber){
        return "Password must contain a number";
    }

    if(!hasSpecial){
        return "Password must contain a special character";
    }

    return "";
}