

function pegarDadosLogin (event) {
    event.preventDefault();

    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    if (email !== 'adm@gmail.com' || senha !== '123456789') {
        alert('Usuário ou senha incorretos!')
    } else {
        window.location.href = 'index.html';
    }


}