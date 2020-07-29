console.log('Hello word!')

var inputSalario = document.querySelector('#ganho-mes') //entrar com valor
var inputHoras = document.querySelector('#horas-dia')

var resultado = document.querySelector('#resposta') //mostra a resposta

function calcularValorHora(){
   var salario = inputSalario.valueAsNumber
   var horas = inputHoras.valueAsNumber

   var horasMes = horas * 22

   var valorHora = salario / horasMes

   var valorHoraDuasCasas = valorHora.toFixed(2) //casas decimais

   resultado.textContent = "R$ " + valorHoraDuasCasas //concatenação

   //console.log(resultado)
}
