let name = prompt(`Qual o seu nome?`)
var salary_hour = parseFloat(prompt(`Quanto você ganha por hora? `))
var work_journey = parseInt(prompt(`Qual sua jornada de trabalho?`))

let gross_salary = salary_hour*work_journey

let inss = 0.08*gross_salary
let irrf = 0.11*gross_salary
let sind = 0.05*gross_salary
let all_discounts = inss+irrf+sind

let net_salary = gross_salary - all_discounts



console.log(`Olá, ${name}. Seu salário bruto é de R$${gross_salary.toFixed(2)}. Seus tributos ao INSS e ao Sindicato são de R$${inss.toFixed(2)} e R$${sind.toFixed(2)} respectivamente. Seu total de descontos é de R$${all_discounts.toFixed(2)} te deixando um líquido de R$${net_salary.toFixed(2)}`)