


$(document).ready(function(){

    document.getElementById('buttons').addEventListener('click', function(ev) {
        var target = ev.target;
        if (target.id == "op1"){
            $('#contenedor').append(`<p>hola</p>`)
            console.log("click")
        }else if(target.id == "op2"){
            $('#contenedor').append(`<p>Adios</p>`)
            console.log("click2")
        }
      }, false);


  });

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

