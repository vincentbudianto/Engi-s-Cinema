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