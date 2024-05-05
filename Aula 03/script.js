let saldo = parseFloat(1000.00)

while (true) {
    user_choice = parseInt(prompt(`1 - Vericar saldo\n2 - Fazer Saque\n3 - Fazer Depósito\n4 - Sair`))

    switch (user_choice){
        case 1:
            alert(`R$${saldo}`)
        
        case 2:
            var valor_saque = parseFloat(prompt(`Valor do Saque: `))
            if (isNaN(valor_saque)){
                if(valor_saque>saldo||saldo==0){
                    alert(`Saldo Insuficiente`)
                }
                else if(valor_saque<=saldo){
                    let novo_saldo = valor_saque-saldo
                    alert(`Saque efetuado Seu novo saldo é de ${novo_saldo.toFixed(2)}`)
                    let saldo=novo_saldo
                }
            }
        
        case 4:
            break  

    }
}