userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie == null) {
    window.location.replace('login.html');
}

function changeBackButton(e) {
    if (e == 0) {
        document.getElementById('back-button').style.color = '#a6a6a6';
        document.getElementById('back-button').style.borderColor = '#a6a6a6';
        document.getElementById('back-button').disabled = true;
    } else {
        document.getElementById('back-button').style.color = '#12abde';
        document.getElementById('back-button').style.borderColor = '#12abde';
        document.getElementById('back-button').disabled = false;
    }
}

function changeNextButton(e) {
    if (e == 0) {
        document.getElementById('next-button').style.color = '#a6a6a6';
        document.getElementById('next-button').style.borderColor = '#a6a6a6';
        document.getElementById('next-button').disabled = true;
    } else {
        document.getElementById('next-button').style.color = '#12abde';
        document.getElementById('next-button').style.borderColor = '#12abde';
        document.getElementById('next-button').disabled = false;
    }
}

function changePage(e) {
    let destinationPage = e.getAttribute('num');
    if (destinationPage == 1) {
        changeBackButton(0);
    } else {
        changeBackButton(1);
    }

    let pages = document.getElementsByClassName('page-button')
    let totalPages = pages.length;
    for (i = 0; i < totalPages; i++) {
        pages[i].style.color = '#12abde';
        pages[i].style.borderColor = '#12abde';
    }

    if (destinationPage == totalPages) {
        changeNextButton(0);
    } else {
        changeNextButton(1);
    }
    
    pages[destinationPage - 1].style.color = '#a6a6a6';
    pages[destinationPage - 1].style.borderColor = '#a6a6a6';

    document.getElementById('current-page').value = destinationPage;
}

function onePage(e) {
    let currentPage = document.getElementById('current-page').value;
    let destinationPage = parseInt(currentPage, 10) + parseInt(e, 10);

    if (destinationPage == 1) {
        changeBackButton(0);
    } else {
        changeBackButton(1);
    }

    let pages = document.getElementsByClassName('page-button')
    let totalPages = pages.length;
    for (i = 0; i < totalPages; i++) {
        pages[i].style.color = '#12abde';
        pages[i].style.borderColor = '#12abde';
    }

    if (destinationPage == totalPages) {
        changeNextButton(0);
    } else {
        changeNextButton(1);
    }

    pages[destinationPage - 1].style.color = '#a6a6a6';
    pages[destinationPage - 1].style.borderColor = '#a6a6a6';

    document.getElementById('current-page').value = destinationPage;
}

if (document.getElementById('current-page').value == 1) {
    changeBackButton(0);
    document.getElementsByClassName('page-button')[0].style.color = '#a6a6a6'; 
    document.getElementsByClassName('page-button')[0].style.borderColor = '#a6a6a6';
} else {
    changeBackButton(1);
}

if (document.getElementById('current-page').value == document.getElementsByClassName('page-button').length) {
    changeNextButton(0);
    document.getElementsByClassName('page-button')[-1].style.color = '#a6a6a6';
    document.getElementsByClassName('page-button')[-1].style.borderColor = '#a6a6a6';
} else {
    changeNextButton(1);
}