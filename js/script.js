const apiKey = 'b3904bfb3f89cb18c2456466a94bdcd5'
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
            let linha = document.createElement('tr');

            
            let colunaFilme = document.createElement('td');
            //colunaFilme.colSpan = 3;

            colunaFilme.textContent = resultado.title;
            linha.appendChild(colunaFilme);
    

        
            let colunaGenero = document.createElement('td');
            //colunaGenero.colSpan = 3;

            colunaGenero.textContent = 'Gênero indisponível'
            //colunaGenero.textContent = resultados.genres.map(genero => genero.name).join(', ');
            linha.appendChild(colunaGenero);


        
            let colunaDiretor = document.createElement('td');
            //colunaDiretor.colSpan = 3;
            //colunaDiretor.textContent = resultados.director;
            colunaDiretor.textContent = 'Diretor indisponível';
            linha.appendChild(colunaDiretor);


            tableBody.appendChild(linha);
        
        });
    } catch (error) {
        console.error('Erro ao buscar os dados sobre o filme!', error)
    }
}

dadosApiTmdb();