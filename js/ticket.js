var payment = function() {
    document.getElementById('modal').style.display = 'block';
}

var close = function() {
    document.getElementById('modal').style.display='none';
}

var modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}