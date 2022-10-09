var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500); // "segura o que você vai fazer dentro dessa função aqui"

  //var alvoEvento = event.target;
  //var paiAlvo = alvoEvento.parentNode; // tr
  //paiAlvo.remove();
  //console.log(event.target); // event.target -> quem foi o alvo do evento
  //event -> qual filho sofreu a ação
});


//pacientes.forEach(function(paciente){
  //paciente.addEventListener("dblclick", function(){
    //console.log("fui clicado com double clique");
    //this.remove(); // this -> palavra de contexto que tem a ver com quem acionou o evento
  //});
//});

// this -> dono do evento
// target -> quem sofreu o evento
