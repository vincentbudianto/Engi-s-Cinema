userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie == null) {
    window.location.replace('login.html');
}

function payment() {
    document.getElementById('modal').style.display = 'block';
}

function close() {
    document.getElementById('modal').style.display='none';
}

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}