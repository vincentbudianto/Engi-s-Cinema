function unameValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/regValidation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response.substr(-3)) {
            case '401':
                var unameInput = document.getElementById('username-input').value;
                document.getElementById('username-input').style.borderColor = 'red';
                document.getElementById('username-input').style.borderWidth = '1.5px';
                document.getElementById('false-username-msg').style.color = 'red';
                document.getElementById('false-username-msg').innerHTML = 'Username ' + unameInput + ' already exist! Please use another username.';
                break;
            
            default :
                document.getElementById('username-input').style.borderColor = 'green';
                document.getElementById('username-input').style.borderWidth = '1.5px';
                document.getElementById('false-username-msg').innerHTML = '';
                break;
        }
    }
}

function emailValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/regValidation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response.substr(-3)) {
            case '402':
                document.getElementById('email-input').style.borderColor = 'red';
                document.getElementById('email-input').style.borderWidth = '1.5px';
                document.getElementById('false-email-msg').style.color = 'red';
                document.getElementById('false-email-msg').innerHTML = 'Email already existed';
                break;

            default :
                document.getElementById('email-input').style.borderColor = 'green';
                document.getElementById('email-input').style.borderWidth = '1.5px';
                document.getElementById('false-email-msg').innerHTML = '';
                break;
        }
    }
}

function phoneValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/regValidation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response.substr(-3)) {
            case '403':
                document.getElementById('phone-input').style.borderColor = 'red';
                document.getElementById('phone-input').style.borderWidth = '1.5px';
                document.getElementById('false-phone-msg').style.color = 'red';
                document.getElementById('false-phone-msg').innerHTML = 'Phone number already existed';
                break;

            default : 
                document.getElementById('phone-input').style.borderColor = 'green';
                document.getElementById('phone-input').style.borderWidth = '1.5px';
                document.getElementById('false-phone-msg').innerHTML = '';
                break;
        }
    }
}

function passValidate() {
    if (document.getElementById('password').value == document.getElementById('confirm-password').value) {
        document.getElementById('confirm-password').style.borderColor = 'green';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
    else {
        document.getElementById('confirm-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
}

function getFileName() {
    let filename = document.getElementById('browser-button').files[0].name;
    document.getElementById('profile-picture-name').value = filename;
}

function register(e) {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/register.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '200':
                alert('Registration successful');
                window.location.replace('login.html');
                break;

            case '201':
                alert('Registration failed');
                break;

            case '301':
                alert('Invalid username');
                break;

            case '302':
                alert('Invalid phone number');
                break;

            case '303':
                alert('Profile picture must not be be empty');
                break;

            case '304':
                alert('File must not be more than 2 MB');
                break;

            case '305':
                alert('Invalid file type');
                break;

            case '501':
                alert('Failed to upload profile picture');
                break;
        }
    }
    
    e.preventDefault();
}

document.getElementById('registerForm').addEventListener('submit', register);