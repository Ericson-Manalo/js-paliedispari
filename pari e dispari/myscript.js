/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/



//chiedo all'utente se preferisce pari o dispari
let userChoice = prompt('Pari o dispari?');

//ho utilizzato un ciclo while fino a quando l'utente sceglie un dato tra pari o dispari, se diverso richiedo all'utente fino a quando non digita correttamente
while(userChoice !="pari" && userChoice!="dispari"){
    console.log("Dato non corretto, scegliere tra pari o dispari");
    userChoice = prompt('Scegliere tra pari o dispari');
}
console.log("L'utente ha scelto: ",userChoice);

//chiedo all'utente di inserire un numero da 1 a 5
const userNumberChoice = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log("L'utente ha scelto ", userNumberChoice);


//creo la funzione che generi casualmente un numero tra 1 e 5
function randomNumber (minNumber, maxNumber){
    const randNumberAI = Math.floor(Math.random() * (maxNumber - minNumber+1) + 1);

    return randNumberAI;
}

const random = randomNumber (1, 5);
console.log("Il computer ha estratto il numero: ", random);

//creo una variabile
let sum = 0;

//utilizzo la variabile creata per inserire la somma tra il numero scelto dall'utente e il numero generato casualmente per il computer
sum = random + userNumberChoice;
console.log(sum);

//condizione nella quale determino chi ha vinto
if (sum % 2 == 0 && userChoice == "pari"){
    console.log("Ha vinto l'utente!");
}else{
    console.log("Ha vinto il computer!");
}

