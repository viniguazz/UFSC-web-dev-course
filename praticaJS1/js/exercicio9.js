function haOnzeDigitos(cpf) {
    let cpfLength = cpf.length;
    if (cpfLength === 11) {
        return true;
    }
    return false;
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    const digits = '0123456789'
    for (let i = 0; i < cpf.length; i++) {
        if (!digits.includes(cpf[i])) {
            return false
        }
    }
    return true
}

function osOnzeNumerosSaoDiferentes(cpf) {
    for (let i = 1; i < cpf.length; i++){
        if (cpf[0] != cpf[i]) {
            return true
        }
    }
    return false
}

function verificadorGenerico(cpf, pos) {

    let sum = 0;
    let j = pos + 1;

    for (let i = 0; i < pos; i++) {
        sum = (Number(cpf[i]) * j) + sum;
        j--;
    }

    let rest = (sum * 10) % 11;

    if (rest === Number(cpf[pos])) {
        return true;
    }

    return false

}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    return verificadorGenerico(cpf, 9)
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    return verificadorGenerico(cpf, 10)
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}