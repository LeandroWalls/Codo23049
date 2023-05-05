const apuntadorALogin = document.getElementById('btnLogin');

//asocio el evento click
//.addEventListener viene de fabrica!
apuntadorALogin.addEventListener('click',login)

function login() 
{
    //1 capturo el username
    const apuntadorAUsername = document.getElementById('username');

    //2 toma el contenido
    const username = apuntadorAUsername.value;

    //3 capturo la password (en una sola linea)
    const password = document.getElementById('password').value;

    //scope de una variable
    const apuntadorADivResultado = document.getElementById('resultado');

    //valido que se hayan completado los campos username y password
    //guard
    if(username === '' || password === '') {
        //quiero que se termine 
        apuntadorADivResultado.innerHTML = 'complete los campos';       
        return;
    }

    //4 evaluo
    if(username === 'carlos' && password === '1234') {
        //bien
        apuntadorADivResultado.innerHTML = 'success';
    }else {
        //mal
        apuntadorADivResultado.innerHTML = 'invalid';
    }
}