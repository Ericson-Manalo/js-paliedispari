/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


//chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
console.log(userWord);


let start = 0; //variabile start che determina la prima lettera della parola
let end = userWord.length-1; //variabile end che determina l'ultima lettera della parola



const invertedWord = isTheWordPalindrome (userWord);


//creo funzione che capisce se la parola inserita è palindroma
function isTheWordPalindrome (word){

    
    while (start < end){
        if(userWord[start] != userWord[end]){
            console.log("parola non palindroma");
        }else{
            console.log('parola palindroma');
        }

        start = start + 1;
        end = end - 1;
    }
    
}