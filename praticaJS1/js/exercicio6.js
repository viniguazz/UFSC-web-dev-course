function invertString() {
    const toRevert = window.prompt('Digite um texto:')
    const reverted = toRevert.split("").reverse().join("");
    console.log(reverted);

}