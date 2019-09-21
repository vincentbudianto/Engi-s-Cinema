function unameValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/loginUserValidation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '401':
                var unameInput = document.getElementById('username-input').value;
                document.getElementById('empty-username').style.color = 'red';
                document.getElementById('empty-username').innerHTML = 'Username/email is required!';
                break;
        }
    }
}

function passValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/loginPassValidation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '402':
                var passInput = document.getElementById('password-input').value;
                console.log(passInput);
                document.getElementById('empty-username').style.color = 'red';
                document.getElementById('empty-username').innerHTML = 'Password is required!';
                break;
        }
    }
}

function login(e) {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/login.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '200':
                window.location.replace('login.html');
                break;

            case '201':
                alert('Login failed');
                break;

            case '301':
                alert('Wrong password');
                break;

            case '302':
                alert('Username/email is not registered');
                break;
        }
    }
    
    e.preventDefault();
}

document.getElementById('loginForm').addEventListener('submit', login);
