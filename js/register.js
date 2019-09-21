function unameValidate() {
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/validation.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '401':
                var unameInput = document.getElementById('username-input').value;
                console.log(unameInput);
                document.getElementById('false-username').style.color = 'red';
                document.getElementById('false-username').innerHTML = 'Username +' 
                unameInput + ' already existed! Please use another username.';
                break;

            case '402':
                alert('Email already existed');
                break;

            case '403':
                alert('Phone number already existed');
                break;
        }
    }

    // e.preventDefault();
}

function validate() {
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
