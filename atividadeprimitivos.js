1//
var nome = "bianca";
var idade = 24;

console.log("Olá, meu nome é " + nome + ", e tenho " + idade , "anos");

2//
var nome = "bianca";
var cidade = "Recife";
console.log(nome + " é de " + cidade)

3//
const num1 = 2
const num2 = 4

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

4 //calculo de área

function calcularAreaPorBaseAltura(base, altura) {
    return (base * altura) / 2;
}

const base = 5;
const altura = 8;
const area = calcularAreaPorBaseAltura(base, altura);
console.log("Área do triângulo (base e altura): " + area);

5 //calculo de média

const nota1 = 7.0; //nota 1
const nota2 = 8.5; //nota 2
const nota3 = 10; //nota3

function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

const media = calcularMedia(nota1, nota2, nota3);
console.log("A média do aluno é: " + media.toFixed(2)); //tofixed pra mostrar casa decimal (add coment pra nao esquecer dps)

6 //Desconto

const precoOriginal = 220.00; //valor do produto original sem desconto
const percentualDesconto = 15; //%valor com porcentagem

function calcularprecoFinal(precoOriginal, percentualDesconto) {
    const valorDesconto = (precoOriginal * percentualDesconto) / 200;
    const precoFinal = precoOriginal - valorDesconto;
    return precoFinal;
}

const precoFinal = calcularprecoFinal(precoOriginal, percentualDesconto);
console.log("O preço final do produto com desconto é: R$ " + precoFinal.toFixed(2));

7 //Imposto de renda

const salario = 7000;
const impostoDevido = calcularImpostoDeRenda(salario);

function calcularImpostoDeRenda(salario) {
    let imposto = 0;

    imposto = (salario * 0.275) - 869.36;
    return imposto;
}
 console.log("O imposto de renda devido será de: R$ " + impostoDevido.toFixed(2));

 8 //conversor de moedas

 const valorEmReais = 300; //valor em real
 const taxaEscolhida = "BRL_USD"; // Converter real para dólar

 function converterMoeda(valor, taxaDeCambio) {
    return valor * taxaDeCambio;
 }
 const taxasDeCambio = {
    "USD_BRL": 5.48,  // 1 USD = 5.25 BRL valor do dolár em 25/09/24
    "EUR_BRL": 6.20,  // 1 EUR = 6.20 BRL
    "BRL_USD": 0.19,  // 1 BRL = 0.19 USD
    "BRL_EUR": 0.16   // 1 BRL = 0.16 EUR
};

const valorConvertido = converterMoeda(valorEmReais, taxasDeCambio[taxaEscolhida]);
console.log("O valor de R$ 300.00 convertido em dólar será de: USD$ " + valorConvertido.toFixed(2));

9 // Celcius para Fahrenheit

const temperaturaCelcius = 27; //27 graus
const temperaturaFahrenheit = converterCelciusparaFahrenheit(temperaturaCelcius);

function converterCelciusparaFahrenheit(Celcius) {
    return (Celcius * 9/5) + 32;
}

console.log(`${temperaturaCelcius}°C é igual a ${temperaturaFahrenheit.toFixed(2)}°F`); //a áspas é  pode incluir variáveis diretamente na string usando ${}.

10 //Calculadora de IMC (metro é a altura, nao sei pq nao ta funcionando a sintax altura, ta dando erro prof)

const peso = 72;
const metro = 1.67;

function calcularIMC(peso, metro) {
    const IMC = peso / (metro * metro); //calcular o imc
    return IMC;
}

const imcresultado = calcularIMC(peso, metro);
console.log(`Seu IMC é: ${imcresultado.toFixed(2)}`);

