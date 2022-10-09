var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest(); // responsável por fazer requisições http

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // é preciso imprimir a resposta da requisição
  xhr.addEventListener("load", function(){ // avisa quando a resposta estiver carregada
    // técnica ajax -> requisição com JavaScript de modo assícrono (não para o fluxo JavaScript)
    var resposta = xhr.responseText;
    //console.log(resposta);
    //console.log(typeof resposta)
    var pacientes = JSON.parse(resposta); // lê um texto em JSON e transforma em um objeto(array) JavaScript

    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente);
    });
    //console.log(pacientes);
    //console.log(typeof pacientes)
    // console.log(xhr.responseText); // imprimir assim que carregar
  });

  xhr.send();


})
