let res = document.getElementById('res')

let btn = document.getElementById('btn')
let listarId = document.getElementById('listarId')

const tabelaProdutos = document.getElementById('produtos-tabela')

btn.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/produto`)
    .then(resp => resp.json())
    .then(produto =>{
        tabelaProdutos.innerHTML = '';

        produto.forEach(produto => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.titulo}</td>
            <td>${produto.descricao}</td>
            <td>${produto.categoria}</td>
            <td>${produto.preco}</td>
            <td>${produto.percentualDesconto}</td>
            <td>${produto.estoque}</td>
            <td>${produto.marca}</td>
            `
            tabelaProdutos.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os produtos!',err)
    })
})

listarId.addEventListener('click', ()=>{
    id = document.getElementById('id')
    fetch(`http://localhost:3000/produto/listar/:id`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `{<br>${dad}<br>}<br>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar o produto!',err)
    })
})