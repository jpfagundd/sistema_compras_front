let res = document.getElementById('res')

let btn = document.getElementById('btn')

const tabelaUsuarios = document.getElementById('usuarios-tabela')

btn.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/usuario`)
    .then(resp => resp.json())
    .then(usuario =>{
        tabelaUsuarios.innerHTML = '';

        usuario.forEach(usuario => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.primeiroNome}</td>
            <td>${usuario.sobrenome}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.endereco}</td>
            <td>${usuario.cidade}</td>
            <td>${usuario.estado}</td>
            <td>${usuario.dataNasc}</td>
            `
            tabelaUsuarios.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os usuários!',err)
    })
})

listarId.addEventListener('click', ()=>{
    id = document.getElementById('id')
    fetch(`http://localhost:3000/usuario/listar/:id`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `{<br>${dad}<br>}<br>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o usuário!',err)
    })
})