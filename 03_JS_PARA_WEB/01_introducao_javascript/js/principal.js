var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    // Coleta do HTML os elementos de altura, peso e imc
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");


    // Coleta dos elementos altura e peso seus respectivos valores
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    // Define inicialmente que a altura e peso são validos (e dependendo da condição abaixo eles serão manipulados)
    var alturaEhValida = true;
    var pesoEhValido = true;

    // Condição que invalida quando o peso é menor ou igual a 0 ou maior que 1000
    if (peso <= 0 || peso > 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!"; // Insere no campo HTML que o peso é inválido
        pesoEhValido = false; // Manipula a variável acima para invalidar o peso
        paciente.style.backgroundColor = "lightcoral"; //No JS, para inserir atributos CSS que utilizam hífen (-) como o background-color, é necessário utilizar camelCase. De qualquer forma a boa prática é alterar essa cor no arquivo CSS e utilizar o JS apenas para manipulações.

    }

    // O mesmo que ocorre no peso, ocorre na altura
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido"); // Adiciona uma classe CSS nova, responsável por alterar a cor do fundo do elemento quando a altura é inválida.
    }

    // Condição onde quando altura e peso são válidos, ocorre a alteração do campo 'tdImc' no HTML do cálculo IMC com apenas 2 casas decimais. Caso contrário, o campo informa erro
    if (alturaEhValida && pesoEhValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);    
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}