//Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
let numbers = 100;

//genera numeri da 1 a 100 in una funzione

//let test = generateGridNumbers(numbers); 
let i;


for (let i = 1; i <= numbers; i++) {
    //let square = gridItem (i);
    //console.log(square); 
    function gridItem(i) {
        //chiamo la costante per creare il div commentato in html
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");
        //console.log(newGridItem);
        //creo span
        gridItem = document.createElement("span");
        gridItem.innerHTML = `${i}`;
        newGridItem.append(gridItem); //utilizzo l'append per inserire all'interno del div lo span
        //console.log(newGridItem);
    
        return newGridItem; //ho fatto il return della funzione per creare una sorta di ciclo. Faccio un cambio di nome da gridItem a newGridItem perché è cambiato l'elemento

     }
    console.log(gridItem);
    
}


//function generateGridNumbers() {
    //creo i numeri per il tramite del ciclo for
    
    //}
    //return i;
//}
//ho creato il div per il tramite di una costante che ho chiamato test e ho messo uguale a gridItem che, a sua volta, è diventata funzione con all'interno la creazione del div
//const test2 = gridItem(i); 
//console.log(test2);
//prima costante creata per la creazione del div
let spanItem; //seconda costante dichiara per creare il secondo elemento all'interno del div


// //function gridItem(index) {
//     //chiamo la costante per creare il div commentato in html
//     //const newGridItem = document.createElement("div");
//     //newGridItem.classList.add("grid-item");
//     //console.log(newGridItem);
//     //creo span
//     //gridItem = document.createElement("span");
//     //console.log(gridItem); tolgo il console log altrimenti mi rimane come elemento singolo
//     //appendo lo span all'interno del div gridItem
//     //document.querySelector("span").innerHTML = "1";
//     gridItem.innerHTML = `${index}`;
//     newGridItem.append(gridItem); //utilizzo l'append per inserire all'interno del div lo span
//     //console.log(newGridItem);

//     return newGridItem; //ho fatto il return della funzione per creare una sorta di ciclo. Faccio un cambio di nome da gridItem a newGridItem perché è cambiato l'elemento
// }




