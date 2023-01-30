/******************************************************
 * Objetivo: Calculadora com 4 operações matemáticas
 * Autor: Dwovanna Santos
 * Data: 30/01/2023
 * Versão: 1.0
*****************************************************/

//import da biblioteca readline
var readline = require ('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

//Função de CallBack para operção somar
entradaDados.question('Operações disponíveis: \n 1- Somar \n 2- Subtrair \n 3- Multiplicar \n 4- Dividir \n Qual operação voce deseja? \n', function(operacoes){
    // Receber o numero digitado no teclado
    let calculo = operacoes;

    //Função de CallBack para entrar o primeiro e o segundo valor
    entradaDados.question('Digite o primeiro valor: \n', function(valor1){
        let numero1 = valor1.replace(',', '.');

        entradaDados.question('Digite o segundo valor: \n', function(valor2){
            let numero2 = valor2.replace(',', '.');
            let resultado;
            
            // ERROS

            // Se o usuario não digitar nada
            if(numero1 =='' || numero2 == '')
            {
                console.log('ERRO: Voce não digitou um valor.')

            // Se digitar letra no lugar de valor
            } else if(isNaN(numero1) || isNaN(numero2))
            {
                console.log('ERRO: Voce não digitou um número válido.')
             
            // Se o usuario nao digitar o numero de uma operação
            } else if(isNaN(operacoes))
            {
                console.log('ERRO: Voce não escolheu uma operação')
            
            // CALCULOS

            // Para fazer a soma dos valores
            }else if(operacoes == 1) {
                soma = (Number(numero1) + Number(numero2))
                
                console.log(numero1, '+', numero2, '=', soma.toFixed(1))
            
            // Para subtrair os valores
            } else if(operacoes == 2) {
                subtrair = (Number(numero1) - Number(numero2))

                console.log(numero1, '-', numero2, '=', subtrair.toFixed(1))
            
            // Para multiplicar os valores
            } else if(operacoes == 3) {
                multiplicar = (Number(numero1) * Number(numero2))

                console.log(numero1, '*', numero2, '=', multiplicar.toFixed(1))

            // Para dividir os valores    
            } else if(operacoes == 4) {
                dividir = (Number(numero1) / Number(numero2))

                console.log(numero1, '/', numero2, '=', dividir.toFixed(1))
            }

            
        })
    })
})