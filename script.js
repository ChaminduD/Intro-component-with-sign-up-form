let firstNameError = document.getElementById("fn-error");
    let lastNameError = document.getElementById("ln-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("pw-error");
    let button = document.getElementById("btn");
    
    function checkFirstName(){
      let firstName = document.getElementById("first-name");
      let fnErrorIcon = document.getElementById("fn-error-icon");

      if(firstName.value.length == 0){
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
        fnErrorIcon.style.display = "block";
        firstNameError.style.display = "block";
        firstNameError.innerHTML = "First Name cannot be empty";
        return false;
      }
      firstName.style.border = "1px solid hsl(246, 25%, 77%)";
      fnErrorIcon.style.display = "none";
      firstNameError.style.display = "none";
      return true;
    }

    function checkLastName(){
      let lastName = document.getElementById("last-name");
      let lnErrorIcon = document.getElementById("ln-error-icon");

      if(lastName.value.length == 0){
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
        lnErrorIcon.style.display = "block";
        lastNameError.style.display = "block";
        lastNameError.innerHTML = "Last Name cannot be empty";
        return false;
      }
      lastName.style.border = "1px solid hsl(246, 25%, 77%)";
      lnErrorIcon.style.display = "none";
      lastNameError.style.display = "none";
      return true;
    }

    function checkEmail(){
      let email = document.getElementById("email");
      let emailErrorIcon = document.getElementById("email-error-icon");

      if(email.value.length == 0){
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        emailErrorIcon.style.display = "block";
        emailError.style.display = "block";
        emailError.innerHTML = "Email cannot be empty";
        return false;
      }
      if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.color = "hsl(0, 100%, 74%)";
        emailError.innerHTML = "Looks like this is not an email";
        return false;
      }
      email.style.color = "hsl(249, 10%, 26%)";
      email.style.border = "1px solid hsl(246, 25%, 77%)";
      emailErrorIcon.style.display = "none";
      emailError.style.display = "none";
      return true;
    }

    function checkPassword(){
      let password = document.getElementById("password");
      let pwErrorIcon = document.getElementById("pw-error-icon");

      if(password.value.length == 0){
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        pwErrorIcon.style.display = "block";
        passwordError.style.display = "block";
        passwordError.innerHTML = "Password cannot be empty";
        return false;
      }
      password.style.border = "1px solid hsl(246, 25%, 77%)";
      pwErrorIcon.style.display = "none";
      passwordError.style.display = "none";
      return true;
    }

    function claim(){
      if(!checkFirstName() || !checkLastName() || !checkEmail() || !checkPassword()){
        button.type = "button";
        return false;
      }else{
        button.type ="submit";
        return true;
      }
    }