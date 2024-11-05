async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('Esse CEP não existe')
        }

        var cidade = document.getElementById('cidade')
        var estado = document.getElementById('estado')
        var logradouro = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido ou não encontrado </p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))



// .then(response => response.json())
// .then(r => {
//     if (r.erro){
//         throw Error('Esse CEP não existe')
//     } else 
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'))


// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(console.log(respostas))