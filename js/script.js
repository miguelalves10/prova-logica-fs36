const apiKey = 'b3904bfb3f89cb18c2456466a94bdcd5';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

const urlBase = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=`;
const tableBody = document.querySelector('#tableBody');

const inputFilme = document.querySelector('#procurarFilme');
const cadastroFilme = document.querySelector('#filme');
const cadastroDiretor = document.querySelector('#diretor');
const cadastroGenero = document.querySelector('#generoCadastro');
const buscarBtn = document.querySelector('#buscarBtn');


async function preencherCamposCadastro(event) {
    event.preventDefault();
    const query = inputFilme.value.trim();

    if (!query) {
        alert('Por favor, insira o nome do filme.');
        return;
    }

    try {
        // Faz a requisição à API com o nome do filme
        const response = await axios.get(urlBase + encodeURIComponent(query));
        const data = response.data;

        if (data.results.length === 0) {
            alert('Nenhum filme encontrado.');
            return;
        }

        const filme = data.results[0]

        cadastroFilme.value = filme.title;
        
        // Ajustando o preenchimento de gênero
        cadastroGenero.value = 'Gênero não disponível';
        
        // api não dao  valor do diretor
        cadastroDiretor.value = 'Diretor não disponível'; 

    } catch (error) {
        console.error('Erro ao buscar filme:', error);
        alert('Erro ao buscar filme. Tente novamente.');
    }
}


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

        resultados.forEach(resultado => {
            let linha = document.createElement('tr');

            let colunaFilme = document.createElement('td');

            colunaFilme.textContent = resultado.title;
            linha.appendChild(colunaFilme);
            
            let colunaSinopse = document.createElement('td');

            colunaSinopse.textContent = resultado.overview;
            linha.appendChild(colunaSinopse);

            let colunaAvaliacao = document.createElement('td');
            colunaAvaliacao.textContent = resultado.vote_average;
            linha.appendChild(colunaAvaliacao);


            tableBody.appendChild(linha);
        });
    } catch (error) {

    }
}

dadosApiTmdb();
