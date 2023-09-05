function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal = undefined
    const regioes = {
        0:"RS",
        1:"DF, GO, MT, MS e TO",
        2:"AC, AP, AM, PA, RO e RR",
        3:"CE, MA e PI",
        4:"AL, PB, PE e RN",
        5:"BA e SE",
        6:"MG",
        7:"ES e RJ",
        8:"SP",
        9:"PR e SC"
    }
    console.log(cpfInformado)
    const numRegiao = cpfInformado.substring(8,9)
    regiaoFiscal = numRegiao + " (" + regioes[numRegiao] +")"
    //----------------------------
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
