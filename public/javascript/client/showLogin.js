let register = document.querySelector("#open");
let loginContainer = document.querySelector(".container");
let registerContainer = document.querySelector(".register-container");
let login = document.querySelector('#close');

register.addEventListener('click', function(){

    loginContainer.classList.add('hide-login');
    registerContainer.classList.remove('hide-register');

});

login.addEventListener('click', function(){

    loginContainer.classList.remove('hide-login');
    registerContainer.classList.add('hide-register');

})