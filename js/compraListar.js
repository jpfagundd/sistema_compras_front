let res = document.getElementById('res')

let btn = document.getElementById('btn')
let listarId = document.getElementById('listarId')

const tabelaCompras = document.getElementById('compras-tabela')

btn.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/compra`)
    .then(resp => resp.json())
    .then(compra =>{
        tabelaCompras.innerHTML = '';

        compra.forEach(compra => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${compra.idCompra}</td>
            <td>${compra.idUsuario}</td>
            <td>${compra.idProduto}</td>
            <td>${compra.quantidade}</td>
            <td>${compra.dataCompra}</td>
            <td>${compra.precoUnitario}</td>
            <td>${compra.descontoAplicado}</td>
            <td>${compra.precoFinal}</td>
            <td>${compra.formaPagamento}</td>
            <td>${compra.statusCompra}</td>
            `
            tabelaCompras.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar as compras!',err)
    })
})

listarId.addEventListener('click', ()=>{
    id = Number(document.getElementById('id').value)
    fetch(`http://localhost:3000/compra/listar/${id}`)
    .then(resp => resp.json())
    .then(dados =>{
        res.innerHTML += `
        <br>
        idCompra: ${dados.idCompra}<br>
        idUsuario: ${dados.idUsuario}<br>
        idProduto: ${dados.idProduto}<br>
        quantidade: ${dados.quantidade}<br>
        dataCompra: ${dados.dataCompra}<br>
        precoUnitario: ${dados.precoUnitario}<br>
        descontoAplicado: ${dados.descontoAplicado}<br>
        precoFinal: ${dados.idCompra}<br>
        formaPagamento: ${dados.formaPagamento}<br>
        statusCompra: ${dados.statusCompra}<br>
        `
        
    })
    .catch((err)=>{
        console.error('Erro ao listar a compra!',err)
    })
})