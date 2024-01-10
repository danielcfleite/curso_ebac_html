$(document).ready(function () {
  // Aplicar as máscaras após a inicialização da validação
  $("#phone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#CEP").mask("00000-000");

  // Configurar e aplicar as regras de validação
  $("#form").validate({
    rules: {
      name: "required",
      phone: "required",
      cpf: {
        required: true,
        minlength: 14,
        maxlength: 14,
      },
      CEP: "required",
    },
    messages: {
      name: "Por favor, informe seu nome",
      phone: "Por favor, informe seu telefone",
      cpf: {
        required: "Por favor, informe seu CPF",
        minlength: "O CPF deve ter 11 dígitos",
        maxlength: "O CPF deve ter 11 dígitos",
      },
      CEP: "Por favor, informe seu CEP",
    },
  });

  $("form").submit((e) => {
    e.preventDefault();
    const cepValue = $("#CEP").val();
    const cep = cepValue.replace(/-/g, "");
    console.log(cep);
    consultarCEP(cep);
  });
});

function consultarCEP(cep) {
  if (cep.length !== 8) {
    console.error("CEP inválido. Certifique-se de inserir 8 dígitos.");
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Fazer a requisição HTTP usando a API fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        console.error("CEP não encontrado.");
      } else {
        const logradouro = data.logradouro;
        const bairro = data.bairro;
        const localidade = data.localidade;
        const uf = data.uf;
        $("#logradouro").html(logradouro);
        $("#bairro").html(bairro);
        $("#cidade").html(localidade);
        $("#uf").html(uf);

        $(".data-modal").removeClass("hidden");
        $("#data").removeClass("hidden");
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}
