var input = document.getElementById('password');

//To execute login button if enter key pressed on password input
input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("login-button").click();
    }
});

function login(e) {
    console.log(100);
    let getData = new FormData(document.forms.loginForm);
    console.log(getData);
    let request = new XMLHttpRequest();
    request.open("POST", "php/login.php", true);
    request.send(getData);

    request.onload = function() {
        console.log(request.response.substr(-3));
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