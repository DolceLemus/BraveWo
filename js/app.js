document.getElementById('start').addEventListener('click', function(ev) {
    var target = ev.target;
    console.log(target);
    var userName = document.getElementById('avatarName').value;
    console.log(userName)
    var button = document.getElementById('start');

    if ( userName === '' ) {
        button.getAttribute('disabled');
    }
    window.location = "./views/chapter1.html";
}, false);

