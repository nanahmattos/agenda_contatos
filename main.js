const form = document.getElementById('form-atividade')
const contatos = []
const telefone = []
let res = document.getElementById('res')

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionalLinha()
    atualizaTabela()
})

function adicionalLinha() {
    const inputAddContato = document.querySelector('input#contato')
    const inputAddTelefone = document.querySelector('input#telefone')

    if (contatos.includes(inputAddContato.value)) {
        alert(`O contato já foi adicionado`)
    } else {
        contatos.push(inputAddContato.value)
        telefone.push(parseFloat(inputAddTelefone.value))

        let linha = '<tr>'
        linha += `<td>\u{1F642} ${inputAddContato.value}</td>`
        linha += `<td>\u{1F4DE} ${inputAddTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha;
    }
    let cont = contatos.length 

    res.innerHTML = ''
    res.innerHTML += `Você tem ${cont} contato adicionado`

    inputAddContato.value = ''
    inputAddTelefone.value = ''
    inputAddContato.focus()
    inputAddTelefone.focus()
    

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
    
}
