const jsonDados = JSON.stringify([
    {'id': 1, 'nome' : 'Ana Silva', 'email' : 'ana@email.com'},
    {'id': 2, 'nome' : 'Carlos Souza', 'email' : 'carlos@email.com'},
    {'id': 3, 'nome' : 'Joao', 'email' : 'joao@email.com'},
    {'id': 4, 'nome' : 'Luis ', 'email' : 'luis@email.com'}
]);

const dadosConvertidos = JSON.parse(jsonDados);

const corpoTabela = document.getElementById('tbodyCorpoTabela');
dadosConvertidos.forEach(usuario => {
    const linha = document.createElement('tr');

    linha.innerHTML = `<td>${usuario.id}</td><td>${usuario.nome}
    </td><td>${usuario.email}</td>`;

    corpoTabela.appendChild(linha);
    
});