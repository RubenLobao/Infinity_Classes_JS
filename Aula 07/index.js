const contarVogais = (palavra) => {
    const vogais = "aeiouAEIOU"
    let contador = 0
    for (const vog of palavra) {
      if (vogais.includes(vog)) {
        contador++
      }
    }
    return contador
  }

  text = 'abacate'

  console.log(contarVogais(text))