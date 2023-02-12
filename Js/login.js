
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    if(email ==='rhsabbir090@gmail.com' && password ==='rhsabbir008'){
        window.location.href ="bank.html";
    }
    else{
       alert('Invalid usuer')
    }

})