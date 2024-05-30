const leftElement = document.querySelector('.left');
const formDiv=document.querySelector('.form-input');
const confiremPasswordElement=document.querySelector('.confirem-password')
const registerButton = document.querySelector('.register-button');
const loginButton = document.querySelector('.login-button');
const authTitleElement = document.querySelector('.auth-title');
const authButtonElement = document.querySelector('.submit');


registerButton.addEventListener('click', function() {
    leftElement.style.backgroundPosition  = "0 80%";
    registerButton.style.transform = 'translateY(500%)';
    formDiv.style.transform  = 'translateX(-151%)';
    leftElement.style.transform = 'translateX(151%)'; 

    setTimeout(function() {
        confiremPasswordElement.style.display  = 'block';
        confiremPasswordElement.style.opacity  = 1;
        authTitleElement.textContent = 'فتح حساب';
        authButtonElement.textContent='فتح حساب';
        loginButton.style.transform = 'translateY(0%)';
    }, 500); 
    

});

loginButton.addEventListener('click', function() {
    leftElement.style.backgroundPosition  = "0 20%";
    loginButton.style.transform = 'translateY(-200%)';
    registerButton.style.transform = 'translateY(0)';
    leftElement.style.transform = 'translateX(0)'; 

    formDiv.style.transform  = 'translateX(0)';
    setTimeout(function() {
        confiremPasswordElement.style.display  = 'none';
    confiremPasswordElement.style.opacity  = 0;
    authTitleElement.textContent = 'تسجيل الدخول';
    authButtonElement.textContent='تسجيل الدخول';
    },500)
    
   });
