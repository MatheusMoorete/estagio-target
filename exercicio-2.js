function verificaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    // Percorre a sequência de Fibonacci até que o número atual seja menor ou igual ao número informado
    while (atual <= numero) {
        // Se o número informado for igual ao número atual, então ele pertence à sequência de Fibonacci
        if (atual === numero) {
            return true;
        }
        
        // Calcula o próximo número da sequência de Fibonacci
        let proximo = anterior + atual;
        // Atualiza os valores anteriores para o próximo cálculo
        anterior = atual;
        atual = proximo;
    }

    // Se o número informado não foi encontrado na sequência de Fibonacci até aqui, então ele não pertence à sequência
    return false;
}

// Número a ser verificado se pertence à sequência de Fibonacci
const numeroInformado = 21; // Você pode alterar o número aqui

// Verifica se o número pertence à sequência de Fibonacci e imprime a mensagem correspondente
if (verificaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
