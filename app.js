// Array para armazenar os nomes adicionados
const nomes = [];

function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let novoNome = input.value.trim();

  if (novoNome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  // Adiciona o nome ao array e limpa o input
  nomes.push(novoNome);
  input.value = '';
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpa a lista antes de atualizar

  nomes.forEach(nome => {
    let li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Aqui você pode implementar a função para sortear amigo secreto
function sortearAmigo() {
  if (nomes.length === 0) {
    alert('Adicione pelo menos um amigo para sortear.');
    return;
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // limpa resultado anterior

  // Sorteia um índice aleatório
  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const amigoSorteado = nomes[indiceSorteado];

  // Exibe o resultado
  const li = document.createElement('li');
  li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
  resultado.appendChild(li);
}
