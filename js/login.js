userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie != null) {
    window.location.replace('homepage.html');
}

let input = document.getElementById('password');

//To execute login button if enter key pressed on password input
input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("login-button").click();
    }
});

function login(e) {
    let getData = new FormData(document.forms.loginForm);
    let request = new XMLHttpRequest();
    request.open("POST", "php/login.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response.substr(-3)) {
            case '200':
                window.location.replace('homepage.html');
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

            case '401':
                alert('Username/email is empty');
                break;

            case '402':
                alert('Password is empty');
                break;
        }
    }

    e.preventDefault();
}

document.getElementById('loginForm').addEventListener('submit', login);