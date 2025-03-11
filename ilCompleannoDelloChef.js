// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef



// Note del docente


// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

//essempio d uttilizzo
// getChefBirthd(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));

  //0utput
//   Data di nascita dello chef: 1990-06-15


async function call(url){
    const promessa = await fetch(url);
    const obj = await promessa.json();
    return obj
}

async function getChefBirthday(id) {
    const ricetta = await call(`https://dummyjson.com/recipes/${id}`);
    console.log('ricetta', ricetta)
    const userId = await call(`https://dummyjson.com/users/${ricetta.userId}`);
    return {birthDate: userId.birthDate}
}


getChefBirthday(1)
  .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
  .catch(error => console.error("Errore:", error.message));