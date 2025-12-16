const header = document.getElementById("secheader");
const secOne = document.getElementById("sec1");
const secTwo = document.getElementById("sec2");
const secThree = document.getElementById("sec3");
const secFour = document.getElementById("sec4");

 const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json`;


    //**! PAS TOUCHE!!! */
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Données récupérées avec succès :', data);

           

            const h1 = document.createElement("h1");
            h1.textContent= data.nomCommercial;
            header.appendChild(h1);




          
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));