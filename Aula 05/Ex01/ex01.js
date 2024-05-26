let numeros = []
let par = []
let impar = []

for(let i = 0; i <= 20; i++){
    numeros.push(i)

    if(i % 2 == 0){
        numeros.push(i)
    }
    else{
        impar.push(i)
    }
}

console.log(numeros)
console.log(par)
console.log(impar)