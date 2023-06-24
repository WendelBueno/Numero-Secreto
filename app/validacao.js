function  verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div class="chute">Valor inválido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div class="chute">Valor inválido: fale um numero maior que ${menorValor} menor que ${maiorValor}!</div>` 
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</botton>
        `

    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += ` <div class="chute__dica">O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`

    }else {

        elementoChute.innerHTML += ` <div class="chute__dica">O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})