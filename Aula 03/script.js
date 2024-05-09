let saldoBanco = 1000; // Saldo inicial

function fazerSaque(valor) {
    if (typeof valor === 'number' && valor > 0 && valor <= saldoBanco) {
        saldoBanco -= valor
        alert(`Saque de ${valor} realizado com sucesso. Novo saldo: ${saldoBanco}`)
    } else {
        alert("Valor inválido ou saldo insuficiente para o saque.")
    }
}

function deposito(valor) {
    if (typeof valor === 'number' && valor > 0 && valor <= saldoBanco) {
        saldoBanco += valor
        alert(`Deposito de ${valor} realizado com sucesso. Novo saldo: ${saldoBanco}`)
    } else {
        alert("Valor inválido ou saldo insuficiente para o saque.")
    }
}

while(true) {
    user_choice = parseInt(prompt(`1 - Vericar saldo\n2 - Fazer Saque\n3 - Fazer Depósito\n4 - Sair`))
    if(!isNaN(user_choice)){
        if(user_choice==1){
            alert(`Seu saldo é de R$${saldoBanco}`)
        }

        else if(user_choice==2){
            let valor_saque = parseFloat(prompt(`Qual o valor do saque? `))
            fazerSaque(valor_saque)
        }

        else if(user_choice==3){
            let valor_deposito = parseFloat(prompt(`Qual o valor do depósito?`))
            deposito(valor_deposito)
        }

        else if (user_choice==4){
            alert(`Até mais!`)
            break
        }
    }
    else{
        alert(`Não é um numero!`)
    }
}