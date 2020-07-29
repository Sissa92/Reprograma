console.log('Reprogramar')

var inputHora = document.querySelector('#valor-hora') //entrar com valor
var inputProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('#resposta') //mostra a resposta

function calcular(){
   var hora = inputHora.valueAsNumber
   var projeto = inputProjeto.valueAsNumber

   var horaProjeto = hora * projeto

   var valorHoraDuasCasas = horaProjeto.toFixed(2) //casas decimais

   resultado.textContent = "R$ " + valorHoraDuasCasas //concatenação

   //console.log(resultado)
}
