export function validator(cpf) {
    // Remover caracteres especiais do CPF
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais (caso contrário, o CPF é inválido)
    if (/^(\d)\1*$/.test(cpf)) {
      return false;
    }
  
    // Calcular o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }
  
    // Verificar se o primeiro dígito verificador está correto
    if (parseInt(cpf.charAt(9)) !== digit) {
      return false;
    }
  
    // Calcular o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }
  
    // Verificar se o segundo dígito verificador está correto
    if (parseInt(cpf.charAt(10)) !== digit) {
      return false;
    }
  
    // O CPF é válido
    return true;
  }
