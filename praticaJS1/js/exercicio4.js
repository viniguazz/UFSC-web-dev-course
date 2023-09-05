

/*   
function tratadorDeCliqueExercicio4() {
     const numbers = [];
    let i = 0;
    while (i < 2) {
        numbers.push(window.prompt('Informe um número:'));
        i++;
    }
    numbers.forEach(item => {
        if (item >= 30 && item <= 50) {
            console.log(`O número ${item} está entre 30 e 50`);
        }
        else if (item >= 60 && item <= 100) {
            console.log(`O número ${item} está entre 60 e 100`);
        }
        else {
            console.log(`O número ${item} não está entre nenhum dos intervalos`);
        }
    })
}
*/

function tratadorDeCliqueExercicio4() {
    test(2);
}

function test(counter) {
    if (counter == 0) {
        return
    }
    const number = window.prompt('Informe um número');
    if (number >= 30 && number <= 50) {
        console.log(`O número ${number} está entre 30 e 50`);
    }
    else if (number >= 60 && number <= 100) {
        console.log(`O número ${number} está entre 60 e 100`);
    }
    else {
        console.log(`O número ${number} não está entre nenhum dos intervalos`);
    }
    counter--;
    test(counter);
}