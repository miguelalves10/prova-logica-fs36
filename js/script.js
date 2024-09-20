const apiKey = 'suatoken'
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
const tableBody = document.querySelector('#tableBody');

function pegarDadosLogin(event) {
    event.preventDefault();

    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    if (email !== 'adm@gmail.com' || senha !== '123456789') {
        alert('Usuário ou senha incorretos!')
    } else {
        window.location.href = 'index.html';
    }
}

function apagarDados() {
    let email = document.querySelector('#email').value = '';
    let senha = document.querySelector('#senha').value = '';
}

async function dadosApiTmdb() {
    try {
        const response = await axios.get(url);
        // guardando todos os dados que tem na api
        const resultados = response.data.results;

        // for each
        resultados.forEach(resultado => {
            // titulo
            let filme = document.createElement('tr');
            let colunaFilme = document.createElement('td');
            colunaFilme.colSpan = 3;

            colunaFilme.textContent = resultado.title;
            filme.appendChild(colunaFilme);
            tableBody.appendChild(filme);


            // gênero
            let genero = document.createElement('tr');
            let colunaGenero = document.createElement('td');
            colunaGenero.colSpan = 3;

            colunaGenero.textContent = 'Gênero indisponível'
            //colunaGenero.textContent = resultados.genres.map(genero => genero.name).join(', ');
            genero.appendChild(colunaGenero);
            tableBody.appendChild(genero);


            // diretor
            let diretor = document.createElement('tr');
            let colunaDiretor = document.createElement('td');
            colunaDiretor.colSpan = 3;
            //colunaDiretor.textContent = resultados.director;
            colunaDiretor.textContent = 'Diretor indisponível';
            diretor.appendChild(colunaDiretor);
            tableBody.appendChild(diretor);
        });
    } catch (error) {
        console.error('Erro ao buscar os dados sobre o filme!', error)
    }
}

dadosApiTmdb();