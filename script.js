const header = document.getElementById("herosec");
const secOne = document.getElementById("sec1");
const secTwo = document.getElementById("sec2");
const secThree = document.getElementById("sec3");
const secFour = document.getElementById("sec4");

 const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json`;


    //**! PAS TOUCHE!!! */
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Données récupérées avec succès :', data);

           

            const h1 = document.createElement("h1");
            h1.textContent = data.nomCommercial;
            header.appendChild(h1);

            const para = document.createElement("p");
            para.textContent = data.phraseAccroche;
            header.appendChild(para);

            const texteAppelAction = document.createElement("a");
            texteAppelAction.href = "";
            texteAppelAction.textContent = data.texteAppelAction;
            header.appendChild(texteAppelAction);



            
            const h2 = document.createElement("h2");
            h2.textContent = "Avantages Clients";
            secOne.appendChild(h2);

            data.avantagesClients.forEach(element => {
                let listAvantage = document.createElement("div");
                listAvantage.textContent = element;
                secOne.appendChild(listAvantage);// pas de html 
                // secOne.appendChild(data.avantagesClients);

            });
            
            const titreH2 =document.createElement("h2");
            titreH2.textContent = "Activites";
            secTwo.appendChild(titreH2);

            data.activites.forEach(element => {
                // let activitesName = document.createElement("div");
                let activityCard = document.createElement("div");

                let activitesimg = document.createElement("img")
                activitesimg.src = element["image-url"];

                activityCard.appendChild(activitesimg);

                let activitesName = document.createElement("h4");
                activitesName.textContent = element.nom;

                activityCard.appendChild(activitesName);

                let activitesDesc = document.createElement("p")
                activitesDesc.textContent = element.description;

                activityCard.appendChild(activitesDesc);

                secTwo.appendChild(activityCard);
 
            });

        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));