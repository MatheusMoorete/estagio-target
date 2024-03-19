function inverterString(str) {
    let invertedString = '';

    // Percorre a string da última posição até a primeira
    for (let i = str.length - 1; i >= 0; i--) {
        // Concatena o caractere atual à nova string
        invertedString += str[i];
    }

    return invertedString;
}

// String a ser invertida
const minhaString = "Olá, mundo!"; // Você pode alterar a string aqui

// Chama a função para inverter a string e imprime o resultado
console.log("String original:", minhaString);
console.log("String invertida:", inverterString(minhaString));
