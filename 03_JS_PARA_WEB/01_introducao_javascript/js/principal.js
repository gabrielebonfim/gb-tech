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

var botaoAdicionar = document.querySelector('#adicionar-paciente');

// O botão recebe o evento 'click' , que ao ser acionado dará inicio à função de adicionar paciente à tabela.
botaoAdicionar.addEventListener('click', function(Event){ // uso de funções anônimas, explicação no final. 
    Event.preventDefault(); //explicação abaixo
    
    // Manipulando inputs e campos da tabela

    // 1 - Coleta os valores recebidos dentro dos inputs do formulário
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // 2 - Cria a nova linha da tabela que receberá o valor inserido no input
    var pacienteTr = document.createElement('tr');

    var nome = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // 3 - Insere o valor nos respectivos campos da tabela
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // 4 - Delega o elemento filho(td) ao elemento pai (tr) - explicação ao fim. 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // 5 - Delega o elemento filho(tr) ao elemento pai(tabela)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

/*                              PREVENT DEFAULT
    O preventDefault() é útil quando você tem diversos handlers e quer que um elemento tenha um comportamento único, sem herdar o comportamento dos elementos onde ele está contido. No caso, o botão está dentro de um 'form', que possui o comportamento padrão de limpar os dados preenchidos nos campos, recarregar a página e enviar os dados. Com o preventDefault podemos mudar esse comportamento desativando o reload da página. 
*/

/*                              APPEND CHILD 
    A função appendChild() insere um elemento filho (children) ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM.
        elemento_pai.appendChild(elemento_filho)
*/

/*                                 FUNÇÕES ANÔNIMAS
    Funções anônimas são funções que não recebem nome, contidas dentro de uma variável e úteis quando a função não será utilizada para outros fins.
*/