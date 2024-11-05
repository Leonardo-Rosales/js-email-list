console.log('Email List');

function generateEmails() {
    // Elemento DOM
    const emailList = document.getElementById('email-list');
    emailList.innerHTML = ''; 

    // Array per memorizzare le richieste API
    const listEmails = [];

    // Ciclo per fare 10 richieste API
    for (let i = 0; i < 10; i++) {
        listEmails.push(
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        );
    }

    // Usiamo Promise.all per gestire tutte le richieste in parallelo
    Promise.all(listEmails)
        .then((res) => {
            res.forEach((res) => {
                const email = res.data.response;
                console.log(email);
                
                
                // Crea un elemento <li> per ogni email
                const listItem = document.createElement('li');
                listItem.textContent = email;
                // Aggiunge l'elemento alla lista
                emailList.appendChild(listItem);
            });
        })
        .catch((err) => {
            console.log('Errore nel recupero delle email:', err);
        });
}

generateEmails();



