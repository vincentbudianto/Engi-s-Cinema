var validate = function() {
    if (document.getElementById('password').value == document.getElementById('confirm-password').value) {
        document.getElementById('confirm-password').style.borderColor = 'green';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    } else {
        document.getElementById('confirm-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
}

var getFileName = function() {
    var filename = document.getElementById('browser-button').files[0].name;
    document.getElementById('profile-picture-name').value = filename;
}