var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
  event.preventDefault(); // prevenir comportamento padrão


  var form = document.querySelector("#form-adiciona");
  // extraindo dados do formuláro
  var paciente = obtemDadosDoFormulario(form);

  // criando tabela após o clique
  // var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);

  console.log(erros);
  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return; // apenas para sair da função dando um return vazio
  }

  // adicionando paciente na tabela
  // var tabela = document.querySelector("#tabela-pacientes");

  // tabela.appendChild(pacienteTr);

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
};

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");

  // controlando o html interno de um elemento
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

// criando um novo objeto
function obtemDadosDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // adicionando dados na tabela e settando dados e nome nos elementos
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe)

  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("O nome não pode estar em branco");
  }

  if(!validaPeso(paciente.peso)) erros.push("Peso é inválido"); // ifs simples não precisam de chaves
  if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  if(paciente.gordura.length == 0){
    erros.push("A gordura do paciente não pode estar em branco");
  }

  if(paciente.peso.length == 0){
    erros.push("O peso não pode estar em branco");
  }

  if(paciente.altura.length == 0){
    erros.push("A altura do paciente não pode estar em branco");
  }

  return erros;
}
