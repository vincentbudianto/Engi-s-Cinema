function validate()
{
    if (document.getElementById('password').value == document.getElementById('confirm-password').value)
    {
        document.getElementById('confirm-password').style.borderColor = 'green';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
    else
    {
        document.getElementById('confirm-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
}

function getFileName()
{
    let filename = document.getElementById('browser-button').files[0].name;
    document.getElementById('profile-picture-name').value = filename;
}

function register(e)
{
    let getData = new FormData(document.forms.registerForm); 
    let request = new XMLHttpRequest();
    request.open("POST", "php/register.php", true);
    request.send(getData);
    e.preventDefault();

    let resp = request.response;

    if (resp == 200)
    {
        window.location.replace('login.html');
    }
}

document.getElementById('registerForm').addEventListener('submit', register);
