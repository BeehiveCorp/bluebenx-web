// Aqui está todo o código proposto para a sprint 2

const cnpjForm = document.querySelector('#cnpjForm');

function handleRegisterPF() {
  const cpfForm = document.querySelector('#cpfForm');

  // Desestruturando do form
  const {
    name,
    cpf,
    email,
    password,
    age,
    phone,
    gender,
    address,
    cep,
    plus,
    district,
    city,
    country,
    num,
  } = cpfForm;

  // Pegando os valores
  var nomePF = name.value,
    cpfPF = cpf.value,
    emailPF = email.value,
    senhaPF = password.value,
    idadePF = age.value,
    telefonePF = phone.value,
    sexoPF = gender.value,
    logradouroPF = address.value,
    cepPF = cep.value,
    complementoPF = plus.value,
    estadoPF = district.value,
    cidadePF = city.value,
    paisPF = country.value,
    numeroPF = num.value;

  const fields = [
    nomePF,
    cpfPF,
    emailPF,
    senhaPF,
    idadePF,
    telefonePF,
    sexoPF,
    logradouroPF,
    cepPF,
    estadoPF,
    cidadePF,
    paisPF,
    numeroPF,
  ];

  // Verificar campos vazios com exceção do complemento
  if (fields.every(field => field != '')) {
    console.log('Todos obrigatorios preenchidos');

    if (isCPFValid(cpf.value)) {
      console.log('cpf valido');
      var ok = confirm(
        `
          Registrado com sucesso!
            Nome: ${nomePF}
            Cpf: ${cpfPF}
            Email: ${emailPF}
            Senha: ${senhaPF}
            Idade: ${idadePF}
            Telefone: ${telefonePF}
            Sexo: ${sexoPF}
            Logradouro: ${logradouroPF}
            Complemento: ${
              complementoPF != '' ? complementoPF : 'Não informado'
            }
            Cep: ${cepPF}
            Estado: ${estadoPF}
            Cidade: ${cidadePF}
            País: ${paisPF}
            Número: ${numeroPF}
          `
      );
      if (ok) {
        location.href = 'portal.html';
      }
    } else {
      console.log('cpf inválido');
      alert('CPF inválido');
    }
  } else {
    var errors = [];
    if (nomePF == '') errors.push('nome');
    if (cpfPF == '') errors.push('cpf');
    if (emailPF == '') errors.push('email');
    if (senhaPF == '') errors.push('senha');
    if (idadePF == '') errors.push('idade');
    if (telefonePF == '') errors.push('telefone');
    if (sexoPF == '') errors.push('sexo');
    if (logradouroPF == '') errors.push('logradouro');
    if (cepPF == '') errors.push('cep');
    if (estadoPF == '') errors.push('estado');
    if (cidadePF == '') errors.push('cidade');
    if (paisPF == '') errors.push('país');
    if (numeroPF == '') errors.push('número');

    alert(`
    | Preencha todos os campos obrigatórios:
    ${errors.join(', ')}
    `);
  }
}

function handleRegisterPJ(e) {
  const cpfForm = document.querySelector('#cnpjForm');

  // Desestruturando do form
  const {
    name,
    cnpj,
    email,
    password,
    age,
    phone,
    companyDescription,
    address,
    cep,
    plus,
    district,
    city,
    country,
    num,
  } = cpfForm;

  // Pegando os valores
  var nomePJ = name.value,
    cnpjPJ = cnpj.value,
    emailPJ = email.value,
    senhaPJ = password.value,
    idadePJ = age.value,
    telefonePJ = phone.value,
    companyDescriptionPJ = companyDescription.value,
    logradouroPJ = address.value,
    cepPJ = cep.value,
    complementoPJ = plus.value,
    estadoPJ = district.value,
    cidadePJ = city.value,
    paisPJ = country.value,
    numeroPJ = num.value;

  const fields = [
    nomePJ,
    cnpjPJ,
    emailPJ,
    senhaPJ,
    idadePJ,
    telefonePJ,
    companyDescriptionPJ,
    logradouroPJ,
    cepPJ,
    estadoPJ,
    cidadePJ,
    paisPJ,
    numeroPJ,
  ];

  // Verificar campos vazios com exceção do complemento
  if (fields.every(field => field != '')) {
    console.log('Todos obrigatorios preenchidos');
    var ok = confirm(
      `
            Registrado com sucesso!
              Nome: ${nomePJ}
              CNPJ: ${cnpjPJ}
              Email: ${emailPJ}
              Senha: ${senhaPJ}
              Idade: ${idadePJ}
              Telefone: ${telefonePJ}
              Ramo de atuação: ${companyDescriptionPJ}
              Logradouro: ${logradouroPJ}
              Complemento: ${
                complementoPJ != '' ? complementoPJ : 'Não informado'
              }
              Cep: ${cepPJ}
              Estado: ${estadoPJ}
              Cidade: ${cidadePJ}
              País: ${paisPJ}
              Número: ${numeroPJ}
            `
    );
    if (ok) {
      location.href = 'portal.html';
    }
  } else {
    var errors = [];
    if (nomePJ == '') errors.push('nome');
    if (cnpjPJ == '') errors.push('CNPJ');
    if (emailPJ == '') errors.push('email');
    if (senhaPJ == '') errors.push('senha');
    if (idadePJ == '') errors.push('idade');
    if (telefonePJ == '') errors.push('telefone');
    if (companyDescriptionPJ == '') errors.push('ramo');
    if (logradouroPJ == '') errors.push('logradouro');
    if (cepPJ == '') errors.push('cep');
    if (estadoPJ == '') errors.push('estado');
    if (cidadePJ == '') errors.push('cidade');
    if (paisPJ == '') errors.push('país');
    if (numeroPJ == '') errors.push('número');

    alert(`
      | Preencha todos os campos obrigatórios:
      ${errors.join(', ')}
      `);
  }
}

function isCPFValid(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == '00000000000') return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

function handleShowDialog() {
  alert('Seja bem vindo');
}
