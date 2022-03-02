let numeri = [];

while (numeri.length < 5) {
    let numeriCasuali = Math.floor(Math.random() * 100) + 1;

    if (!numeri.includes(numeriCasuali)) {
        numeri.push(numeriCasuali);
    }
}

console.log(numeri);


const numeriContainer = document.getElementById('container-game');
const numeriRicordati = document.getElementById('numeri-ricordati');

numeri.forEach(element => numeriContainer.innerHTML += `<span class="numeri">${element}</span>`);

function simonGame() {
    let arrayUtente = [];
    
    numeriContainer.classList.add('hidden');
    numeriRicordati.classList.remove('hidden');


    for (let i = 0; i < 5; i++) {
        let numeriUtente = parseInt(prompt('Inserisci un numero che ricordi.'));
        if (numeri.includes(numeriUtente)) {
            arrayUtente.push(numeriUtente);
        }
    }
    console.log(arrayUtente);

    if (arrayUtente == '') {
        numeriRicordati.innerHTML = `<h3>Non hai indovinato nessun numero!</h3>`;
    } else {
        arrayUtente.forEach(element => numeriRicordati.innerHTML += `<span class="numeri">${element}</span>`);
    }

}

setTimeout(simonGame, 30000);