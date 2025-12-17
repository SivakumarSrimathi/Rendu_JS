const hero = document.getElementById("herosec");
const avantages = document.getElementById("avantages");
const activites = document.getElementById("activites");
const temoignages = document.getElementById("temoignages");
const secFour = document.getElementById("sec4");

 const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json`;


    //**! PAS TOUCHE!!! */
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Données récupérées avec succès :', data);

           

            const h1 = document.createElement("h1");
            h1.textContent = data.nomCommercial;
            hero.appendChild(h1);

            const para = document.createElement("p");
            para.textContent = data.phraseAccroche;
            hero.appendChild(para);

            const texteAppelAction = document.createElement("a");
            texteAppelAction.href = "";
            texteAppelAction.textContent = data.texteAppelAction;
            hero.appendChild(texteAppelAction);



            
            const h2 = document.createElement("h2");
            h2.textContent = "Avantages Clients";
            avantages.appendChild(h2);

            data.avantagesClients.forEach(element => {
                
                let listAvantage = document.createElement("div");
                listAvantage.textContent = element;
                avantages.appendChild(listAvantage);// pas de html 
                

            });
            
            const titreActivite = document.createElement("h2");
            titreActivite.textContent = "Activites";
            activites.appendChild(titreActivite);

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

                activites.appendChild(activityCard);
            });

            const titreTemo = document.createElement("h2");
            titreTemo.textContent = "Temoignages";
            temoignages.appendChild(titreTemo);

            data.temoignages.forEach(element => {

                let temoCard = document.createElement("div");
                
                let temoName = document.createElement("p");
                temoName.textContent = element.prenom;
                
                temoCard.appendChild(temoName);

                let temoType = document.createElement("p");
                temoType.textContent = element.typeExperience;

                temoCard.appendChild(temoType);

                let temoCommentaire = document.createElement("p");
                temoCommentaire.textContent = element.commentaire;

                temoCard.appendChild(temoCommentaire);

                let temoNote = document.createElement("p");
                temoNote.textContent = element.note;

                temoCard.appendChild(temoNote);

                temoignages.appendChild(temoCard);
            });

        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));